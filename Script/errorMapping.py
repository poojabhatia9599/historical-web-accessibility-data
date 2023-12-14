# This program takes the URL as an input and provides error details from WAVE API
import json
from urllib.request import urlopen
import sys
import time
from collections import OrderedDict

# tool = sys.argv[1]
# input = sys.argv[2]

tool = "wave"

# Enter the URL here for which errors needs to be collected
inputs = [
    "https://web.archive.org/web/20230101001818/https://www.tmz.com/",
    "https://web.archive.org/web/20230201001002/https://www.tmz.com/",
    "https://web.archive.org/web/20230301004208/https://www.tmz.com/",
    "https://www.tmz.com/"
]

WAVE_to_WCAG = {
            'alt_missing' : [['1.1.1'],"Missing alternative text"],
            'alt_link_missing' : [['1.1.1','2.4.4'],"Linked image missing alternative text"],
            'alt_spacer_missing' : [['1.1.1'],"Spacer image missing alternative text"],
            'alt_input_missing' : [['1.1.1','2.4.4'],"Image button missing alternative text"],
            'alt_area_missing' : [['1.1.1','2.4.4'],"Image map area missing alternative text"],
            'alt_map_missing' : [['1.1.1'],"Image map missing alternative text"],
            'longdesc_invalid' : [['1.1.1'],"Invalid longdesc"],
            'label_missing' : [['1.1.1','1.3.1','2.4.6','3.3.2'],"Missing form label"],
            'label_empty' : [['1.1.1','1.3.1','2.4.6','3.3.2'],"Empty form label"],
            'label_multiple' : [['1.1.1','1.3.1','2.4.6','3.3.2'],"Multiple form labels"],
            'aria_reference_broken' : [['1.3.1','4.1.2'],"Broken ARIA reference"],
            'aria_menu_broken' : [['2.1.1','4.1.2'],"Broken ARIA menu"],
            'title_invalid' : [['2.4.2'],"Missing or uninformative page title"],
            'language_missing' : [['3.1.1'],"Document language missing"],
            'meta_refresh' : [['2.2.1','2.2.2'],"Page refreshes or redirects"],
            'heading_empty' : [['1.3.1','2.4.1','2.4.6'],"Empty heading"],
            'button_empty' :  [['1.1.1','2.4.4'],"Empty button"],
            'link_empty' : [['2.4.4'],"Empty link"],
            'link_skip_broken' : [['2.1.1','2.4.1'],"Broken skip link"],
            'th_empty' : [['1.3.1'],"Empty table header"],
            'blink' : [['2.2.2'],"Blinking content"],
            'marquee' : [['2.2.2'],"Marquee"],
            'contrast' : [['1.4.3'],"Very low contrast"]
        }

url_elements = {}
WCAG_error_details = {}
total_errors_and_counter = {}

for error_detail in WAVE_to_WCAG:
    for guideline in WAVE_to_WCAG[error_detail][0]:
        if guideline not in WCAG_error_details:
            WCAG_error_details[guideline] = {}
        WCAG_error_details[guideline][error_detail] = {}    
        WCAG_error_details[guideline][error_detail][WAVE_to_WCAG[error_detail][1]] = {}

if tool == "WAVE" or "wave" or "Wave":
    for input in inputs:
        try:
            URL = "https://wave.webaim.org/api/request?key=tI5uxMGC3219&reporttype=2&url=" + input
            print('-------------------------------------------------')
            print(input)
            month_year = input[28:36]
            for error in WCAG_error_details:
                for err in WCAG_error_details[error]:
                    for description in WCAG_error_details[error][err]:
                        WCAG_error_details[error][err][description][month_year] = 0
            time.sleep(5)
            data_from_wave_api = urlopen(URL).read().decode('utf-8')
            
            # convert Wave API response to JSON
            data = json.loads(data_from_wave_api)

            total_errors = data['categories']['error']['count'] + data['categories']['contrast']['count']

            counter = 0

            # get errors
            error_list = data['categories']['error']
            for error in error_list['items']:
                id = error_list['items'][error]['id']
                description = error_list['items'][error]['description']
                count = error_list['items'][error]['count']
                if id in WAVE_to_WCAG:
                    for guideline in WAVE_to_WCAG[id][0]:
                        counter += count
                        if description == 'Language missing or invalid':
                            description = 'Document language missing'
                        WCAG_error_details[guideline][id][description][month_year] = count
                else:
                    print("ID NOT FOUND")
                    print("ID NOT FOUND")
                    print("ID NOT FOUND")
                    print("ID NOT FOUND")
                    print("ID NOT FOUND")


            # get contrast errors
            constrast_error_list = data['categories']['contrast']
            for error in constrast_error_list['items']:
                id = constrast_error_list['items'][error]['id']
                description = constrast_error_list['items'][error]['description']
                count = constrast_error_list['items'][error]['count']
                if id in WAVE_to_WCAG:
                    for guideline in WAVE_to_WCAG[id][0]:
                        counter += count
                        WCAG_error_details[guideline][id][description][month_year] = count
                else:
                    print("ID NOT FOUND")

            
            print("Total number of errors:", total_errors)
            print("counter:", counter)
            total_errors_and_counter[input] = str(total_errors) + ";" + str(counter)
            total_elements = data['statistics']['totalelements']
            url_elements[input] = total_elements
            print("Total elements:", total_elements)
            print("\n")
        except Exception as e:
            print(input, " gives error")
            print(str(e))

WCAG_error_details_sorted = OrderedDict(sorted(WCAG_error_details.items()))
for error in WCAG_error_details_sorted:
    error_sorted = OrderedDict(sorted(WCAG_error_details_sorted[error].items()))
    for err in error_sorted:
        for description in error_sorted[err]:
            years = "; ".join(["{} ; {}".format(y, "" if error_sorted[err][description][y] == 0 else error_sorted[err][description][y]) for y in error_sorted[err][description]])
            print("{} ; {} ; {} ; {}".format(error, err, description, years))

for url in url_elements:
    print(url, " \t ", url_elements[url])

for url in total_errors_and_counter:
    print(url, " ; ", total_errors_and_counter[url])
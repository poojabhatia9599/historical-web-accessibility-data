YUI.add("td-applet-weather-atomic-headerview",function(e,t){"use strict";e.namespace("TD.Applet").WeatherHeaderView=e.Base.create("TDAppletWeatherHeaderView",e.Af.AppletView,[],{autoRender:!1,locationPicker:null,titleNode:null,onlyShowCity:!1,initializer:function(t){var o,i,n,a=this,l=a.get("container"),c=l.ancestor(".js-applet"),r=a.get("model"),s=r.syncContext.context.crumb||null,u=r.get("config").showWidgetLink;t=t||{},a.onlyShowCity=!0===t.onlyShowCity,o=r.get("data"),i={container:null,current:null,favorite:null,user_crumb:s,tooltip_conf:{container:c},i13n:o.i13n,show_manage_link:u},o.useplus&&(i.useplus=!0),o.current&&(i.current=o.current),o.favorite&&(i.favorite=o.favorite),t.ui.tooltipPosition&&(i.tooltip_conf.position=t.ui.tooltipPosition),t.ui.glyphHook&&(i.glyphHook=t.ui.glyphHook),null!==t.autoDetectLocation&&(i.autoDetectLocation=!0===t.autoDetectLocation),(n=l&&l.one(".LocationPanel"))&&(i.container=n,t.panelType&&"detection"===t.panelType?e.use("af-location-detection",function(e){a.locationPicker=new e.Af.LocationDetection(i)}):e.use("af-location-panel",function(e){a.locationPicker=new e.Af.LocationPanel(i)}),a.get("model").after("dataChange",a.handleSelectedLocationChange,a))},handleSelectedLocationChange:function(e){var t,o,i=this.get("model"),n=i.getDataModel("weather"),a="Weather",l=n.get("weatherDataList"),c=n.get("currentLoc"),r=i.get("i18n")||{};this.titleNode||(this.titleNode=this.get("container").one(".js-city-name")),l[0]&&l[0].location&&(t=l[0].location)&&(t.displayName?a=t.displayName:(t.city&&(a=t.city),this.onlyShowCity||(o=t.statecode||t.state)&&(a+=", "+o)),c.woeid&&t.woeid&&c.woeid===t.woeid&&(a+='\n<b class="Fz-s Dimmed">('+(r.CURRENT_LOCATION||"Current Location")+")</b>")),this.titleNode.setHTML(a)}})},"@VERSION@",{requires:["af-applet-view","mjata-model-store"]});
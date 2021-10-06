import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Property } from 'src/app/app.models';
import { AppService } from 'src/app/app.service';
import { AppSettings, Settings } from 'src/app/app.settings';

@Component({
  selector: 'app-header-map',
  templateUrl: './header-map.component.html',
  styleUrls: ['./header-map.component.scss']
})
export class HeaderMapComponent implements OnInit {
  @Input('locations') locations: Array<any> = [];
  @Input('contentOffsetToTop') contentOffsetToTop; 
  @Input('fullscreen') fullscreen: boolean = false;
  public lat: number = 40.678178;
  public lng: number = -93.944158; 
  public zoom: number = 5; 
  public markerAnimation = 'BOUNCE';  
  public mapStyles:any = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8b9198"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#323336"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#414954"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#2e2f31"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7a7c80"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#242427"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#202022"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#393a3f"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#202022"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#393a3f"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#202022"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#202124"
            }
        ]
    }
  ]; 
  public property:Property;

  public settings: Settings;
  constructor(public appSettings:AppSettings, public appService:AppService) {
    this.settings = this.appSettings.settings; 
  }

  ngOnInit(): void {
    if(this.contentOffsetToTop){
      setTimeout(() => {
        this.settings.contentOffsetToTop = this.contentOffsetToTop;
      }); 
    } 
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}){  
    if(changes.locations){
      if(!changes.locations.isFirstChange()){     
        //reset map position on filter
        this.zoom = 5;
        this.lat = 40.678178;
        this.lng = -93.944158;
        this.markerAnimation = 'BOUNCE';  
        setTimeout(() => {
          this.markerAnimation = null;
        }, 1000);
      } 
    }  
  }

  ngOnDestroy(){  
    setTimeout(() => {
      this.settings.contentOffsetToTop = false;
    });  
  }

  onMapReady(e:any) { 
    setTimeout(() => {
      this.markerAnimation = null;
    }, 1000);
  } 

  public onMapClick(e:any){
    console.log(e); 
  }

  public onMarkerClick(e:any, propertyId:number){ 
    this.lat = e.latitude;
    this.lng = e.longitude;  
    if(this.zoom < 11){
      this.zoom = 11;
    }
    this.property = null;
    setTimeout(() => {
      this.appService.getPropertyById(propertyId).subscribe(res => {
        this.property = res.value[0];  
      }); 
    }, 500);  
  }

  public onZoomChange(e:any){ 
    this.zoom = e;
  } 

}

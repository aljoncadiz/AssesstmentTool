whoAPP.controller('HomeCtrl',['$scope','section1Factory','section2Factory','section3Factory',
                              'section4aFactory','section4bFactory','section4cFactory',
                              'section4dFactory','section4eFactory','section4fFactory',
                              'section4gFactory','section4hFactory','section5aFactory',
                              'section5bFactory','section6aFactory','section6bFactory',
                               'toaster',
                              function($scope,section1Factory,section2Factory,section3Factory,
                              section4aFactory,section4bFactory,section4cFactory,
                              section4dFactory,section4eFactory,section4fFactory,
                              section4gFactory,section4hFactory,section5aFactory,
                              section5bFactory,section6aFactory,section6bFactory,toaster) {
                                    
    $scope.factories = [section1Factory,section2Factory,section3Factory,
                    section4aFactory,section4bFactory,section4cFactory,
                    section4dFactory,section4eFactory,section4fFactory,
                    section4gFactory,section4hFactory,section5aFactory,
                    section5bFactory,section6aFactory,section6bFactory]; 
                                    
    $scope.sectionNames = ["section1","section2","section3","section4a","section4b","section4c",
                            "section4d","section4e","section4f","section4g","section4h","section5a",
                            "section5b","section6a","section6b"]; 
                                  
    $scope.facilityName='';                             
   
   
    $scope.facilityCode = [];
    $scope.facility = {};
    $scope.facilitySections = []; 
    $scope.whoDefinitions = [
    {term:'BHS', meaning:'Barangay Health Station'},
    {term:'BHW', meaning:'Barangay Health Worker'},
    {term:'BNS', meaning:'Barangay Nutritional Specialist'},
    {term:'BSI', meaning:'Barangay Sanitation Inspector'},
    {term:'CMAM', meaning:'Community Management on Acute Malnutrition'},
    {term:'DOH', meaning:'Department of Health'},
    {term:'EINC', meaning:'Essential Intrapartum and Newborn Care'},
    {term:'EPI', meaning:'Expanded Program on Immunization'},
    {term:'FP', meaning:'Family Planning'},
    {term:'GPS', meaning:'Global Positioning System'},
    {term:'HeRAMS', meaning:'Health Resource Availability Mapping System'},
    {term:'HF', meaning:'Health Facility'},
    {term:'HIV', meaning:'Human Immunodeficiency Virus'},
    {term:'IEC', meaning:'Information, Education, and Communication'},
    {term:'IMCI', meaning:'Integrated Management of Childhood Illness   '},
    {term:'MHO', meaning:'Municipal Health Office'},
    {term:'MUAC', meaning:'Mid-Upper Arm Circumference'},
    {term:'NCD', meaning:'Noncommunicable Disease'},
    {term:'PHN', meaning:'Public Health Nurse'},
    {term:'PPE', meaning:'Personal Protective Equipment '},
    {term:'PSGC', meaning:'Philippine Standard Geographic Code'},
    {term:'PTB', meaning:'Pulmonary Tuberculosis'},
    {term:'RHM', meaning:'Rural Health Midwife'},
    {term:'RHU', meaning:'Rural Health Unit'},
    {term:'SAM', meaning:'Severe Acute Malnutrition'},
    {term:'SPEED', meaning:'Survielance in Post-Extreme Emergencies and Disasters'},
    {term:'STI', meaning:'Sexually Transmitted Infection'},
    {term:'TB', meaning:'Tuberculosis'},
    {term:'TCL', meaning:'Target Client List'},
    {term:'VBD', meaning:'Vector-borne Disease'},
    {term:'Waypoint', meaning:' A reference point to precisely identify the location of the health facility.'},
    {term:'Geocoding information', meaning:'Gives information concerning the exact location of the health facility. in particular,                                  GPS coordinates and waypoint.'},
    {term:'Capitation', meaning:'A payment arrangement for healthcare that is based on payment per person, rather than per service                                  provided.'},      
    {term:'No damage', meaning:'Health facility has not sustained any kind of ruin/impairment. No restoration is needed.'},
    {term:'Totally damaged', meaning:'Health facility has been totally destroyed beyond any repair/rehabilitation and cannot                                            adequately function.'},
    {term:'Partially damaged', meaning:'Health facility has sustained damages, either major or minor.'}    
    ,{term:'Minor Damage', meaning:'Damages that require either small-scale intervention or no intervention.'},     
    {term:'Major Damage', meaning:'Damages that require large-scale intervention.'},
    {term:'Temporary Location', meaning:'Existing location being used in lieu of a non-functioning health facility.'},      
    {term:'Transitional Health Station', meaning:'A makeshift health facility constructed out of non-permanent materials.'},      
    {term:'Restored', meaning:'Interventions undertaken to improve functionality of health facility if that health facility has                                     either been partially damaged or totally destroyed'},      
    {term:'Repaired', meaning:'Small-scale interventions undertaken for minor damages. Could include maintenance on roofing,                                        ceiling, wiring, and/or windows.'},       
    {term:'Rehabilitated', meaning:'Large-scale interventions undertaken for major damages. Could include total rehabilitation on                                   roofing, ceiling, wiring, and/or windows.'},       
    {term:'Reconstructed', meaning:'Creation of a completely new health facility because the former health facility has been destroyed or damaged beyond rehabilitation. Health facility may be erected in the place of the old health facility or relocated.'},      
    {term:'Psychological First Aid', meaning:'Describes a humane, supportive response to a fellow human being who is suffering and who may need support.'}    
    ];
             
    //Init
    if(localStorage.getItem('facilityCode') == null)
    {
        localStorage.setItem('facilityCode',JSON.stringify($scope.facilityCode));
    }
    //init                                
    $scope.setFacilityCode = function(facility){
        $scope.facilityName = facility;
    };   
    
    $scope.getFacilityCode = function(){
        
        return $scope.facilityName;
        
    };
    $scope.saveFacilitySections = function(facility){
        var facilitySections = []; 
        for(var i = 0; i < $scope.factories.length; i++)
        {
            $scope.factories[i] = JSON.parse(localStorage[$scope.sectionNames[i]]);
        }
        
        for(var i = 0; i < $scope.factories.length; i++)
        {
            facilitySections.push($scope.factories[i]); 
            console.log('factory pushed');
        }
        
        localStorage[facility] = JSON.stringify(facilitySections);
        
        console.log(facility + "'s Facility section saved");
    };
                                    
    $scope.retrieveFacilitySections = function(facility){
        var facilities = localStorage[facility];
        var facilitySections = JSON.parse(facilities);
        for(var i = 0; i < $scope.factories.length; i++)
        {
            localStorage[$scope.sectionNames[i]] = JSON.stringify(facilitySections[i]);
            console.log("facility retrieved");
        }
        
        document.addEventListener("deviceready", onDeviceReady, false);
    // PhoneGap is ready

    function onDeviceReady() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        
    }

    function gotFS(fileSystem) {

        fileSystem.root.getFile("who/data/"+facility+".csv", null, gotFileEntry, fail);
    }

    function gotFileEntry(fileEntry) {
        fileEntry.file(gotFile, fail);
    }

    function gotFile(file){
        readDataUrl(file);
        readAsText(file);
    }

    function readDataUrl(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("Read as data URL");
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    }

    function readAsText(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("Read as text");
            console.log(evt.target.result);
            
             var json = CSV2JSON(evt.target.result);
            
            localStorage[$scope.facilityName] = JSON.stringify(json);
         
        };
        reader.readAsText(file);
       
    }

    function fail(evt) {
        console.log(evt.target.error.code);
    }
        
        function CSVToArray(strData, strDelimiter) {
    // Check to see if the delimiter is defined. If not,
    // then default to comma.
    strDelimiter = (strDelimiter || ",");
    // Create a regular expression to parse the CSV values.
    var objPattern = new RegExp((
    // Delimiters.
    "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
    // Quoted fields.
    "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
    // Standard fields.
    "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
    // Create an array to hold our data. Give the array
    // a default empty first row.
    var arrData = [[]];
    // Create an array to hold our individual pattern
    // matching groups.
    var arrMatches = null;
    
    while (arrMatches = objPattern.exec(strData)) {
      
        var strMatchedDelimiter = arrMatches[1];
       
        if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
            
            arrData.push([]);
        }
       
        if (arrMatches[2]) {
          
            var strMatchedValue = arrMatches[2].replace(
            new RegExp("\"\"", "g"), "\"");
        } else {
            
            var strMatchedValue = arrMatches[3];
        }
        
        arrData[arrData.length - 1].push(strMatchedValue);
    }
    // Return the parsed data.
    return (arrData);
}
        function CSV2JSON(csv) {
	    var array = CSVToArray(csv);
	    var objArray = [];
	    for (var i = 1; i < array.length; i++) {
	        objArray[i - 1] = {};
	        for (var k = 0; k < array[0].length && k < array[i].length; k++) {
	            var key = array[0][k];
	            objArray[i - 1][key] = array[i][k]
	        }
        }

		    var json = JSON.stringify(objArray);
		    var str = json.replace(/},/g, "},\r\n");

           return str;
       }
        
    };
                                                             
    
    $scope.createPage = true;

    $scope.indexPage = true;
    $scope.facilityPage = true;                                
     
    $scope.showCreate = function(){
        $scope.createPage = !$scope.createPage;
        
        
     
    };
                                  
                                   
    $scope.showIndex = function () {

        $scope.indexPage = !$scope.indexPage;
        
     };
                                  
    $scope.reset = function(){
        localStorage.removeItem($scope.facilityName);
        for(var i = 0; i < $scope.sectionNames.length; i++)
        {
            localStorage.removeItem($scope.sectionNames[i]);
        }
        var facilityCodes = JSON.parse(localStorage['facilityCode']);
        
        for(var i = 0; i < facilityCodes.length; i++)
        {
            if(facilityCodes[i].code == $scope.facilityName)
            {
                facilityCodes.splice(i,1);
                localStorage['facilityCode'] = JSON.stringify(facilityCodes);
                $scope.facilityCodeSave($scope.facilityName);
                console.log("sections cleared");
            }
            else
                console.log("searching");
        }                                  
    };

$scope.delete = function(){
    
         document.addEventListener("deviceready", onDeviceReady, false);
        
        function onDeviceReady()
        {
          
           window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, removeFile, fail);
        }
       
        
		function removeFile(fileSystem){
		
		    fileSystem.root.getFile("who/data/" + $scope.getFacilityCode() + ".csv", {create: true, exclusive: false}, gotRemoveFileEntry, fail);
		}
		
		function gotRemoveFileEntry(fileEntry){
		   
		    fileEntry.remove(success, fail);
		}
		
		function success(entry) {
		   
		}
		
		function fail(error) {
		 
		}
    
        localStorage.removeItem($scope.facilityName);
        for(var i = 0; i < $scope.sectionNames.length; i++)
        {
            localStorage.removeItem($scope.sectionNames[i]);
        }
        var facilityCodes = JSON.parse(localStorage['facilityCode']);
        
        for(var i = 0; i < facilityCodes.length; i++)
        {
            if(facilityCodes[i].code == $scope.facilityName)
            {
                facilityCodes.splice(i,1);
                localStorage['facilityCode'] = JSON.stringify(facilityCodes);
                
            }
        }                                  
    };
                
    $scope.showIndexForce = function(){
        $scope.indexPage = false;
        $scope.facilityPage = true;
    };

      $scope.hideIndex = function(){ 
        $scope.indexPage = true;
        
     };
                                                                         
     $scope.showFacilityPage = function(){
         $scope.facilityPage = !$scope.facilityPage;
     };
                                
     $scope.hideFacilityPage = function(){
        $scope.facilityPage = true;
     };
   

     $scope.$on('showDiv', function(){
        $scope.indexPage = !$scope.indexPage;
    })
     
   $scope.$on('bindFacilityCode', function(){
        return $scope.getFacilityCode();
    })
         
    $scope.facilityCodeSave = function(facility){
        var found = false;
        var items = JSON.parse(localStorage.getItem('facilityCode'));
        for(var i = 0; i < items.length; i++)
        {
            if(items[i].code == facility)
            {
                found = true;
                break;
            }
        }
        if(!found)
        {
            items.push({"code":facility});
            section1Factory.dohHfCode = facility;
            localStorage.setItem('facilityCode',JSON.stringify(items));
            for(var i = 0; i < $scope.factories.length; i++)
            {
                localStorage.setItem($scope.sectionNames[i],JSON.stringify($scope.factories[i]));
            }
            for(var i = 0; i < $scope.factories.length; i++)
            {
                $scope.facilitySections.push($scope.factories[i]);
            }
            localStorage.setItem(facility,JSON.stringify($scope.facilitySections));
            console.log("Facility section saved");

            console.log("facility Saved");
        }
        else
        {
            console.log("Item Exist");
        }
    };
   
    $scope.facilityCodeRetrieve = function(){
        $scope.facilityCode = [];
        $scope.facilityCode = JSON.parse(localStorage.getItem('facilityCode'));
        if($scope.faciltyCode != null)
        {
            console.log($scope.facility.facilityCode);
            console.log("facility Retrieved");
        }
        else
        {
            //$scope.facilityCode = [];
            console.log('facility code empty');
        }
        
    };
                                    
    $scope.pop = function(){
        toaster.pop('Success', "Discard", "Discarding success");
    };
     $scope.pop2 = function(){
        toaster.pop('Success', "Delete", "Deleting success");
    };
                                  
    $scope.clear = function(){
        toaster.clear();
    };
                                  
    $scope.export = function(){
    
    
    var sectionNames = ["section1","section2","section3","section4a","section4b","section4c",
                       "section4d","section4e","section4f","section4g","section4h","section5a",
                       "section5b","section6a","section6b"];
                                    
    var factories = [section1Factory,section2Factory,section3Factory,
                    section4aFactory,section4bFactory,section4cFactory,
                    section4dFactory,section4eFactory,section4fFactory,
                    section4gFactory,section4hFactory,section5aFactory,
                    section5bFactory,section6aFactory,section6bFactory];
    
        for(var i = 0; i < sectionNames.length; i++)
         {
             console.log(sectionNames[i]);
             
             if(localStorage.getItem(sectionNames[i]) != null ||
                localStorage.getItem(sectionNames[i]) !=  undefined)
                {
                    console.log(sectionNames[i] + " exists");
                factories[i] = JSON.parse(localStorage.getItem(sectionNames[i]));
                }
             console.log(factories[i]);
         }
            
         
         
         var data = $.extend({},factories[0],factories[1]);
         
         for(var i = 2; i < factories.length; i++)
         {
             jQuery.extend(data,factories[i]);
         }
         
     var jsObject = JSON.stringify(data);
     var obj =[ $.parseJSON(jsObject)];
     document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

    }
    
    function gotFS(fileSystem) {
     
       window.FS = fileSystem;
            

       
       var printDirPath = function(entry){
			
		}
		
		createDirectory("who/data", printDirPath);

        var d = new Date();
        var n = d.valueOf();
        fileSystem.root.getFile("who/data/"+$scope.getFacilityCode()+".csv", {create: true, exclusive: false}, gotFileEntry, fail);
        
        
    }
  
    function createDirectory(path, success)
    {
       
       var dirs = path.split("/").reverse();
	   var root = window.FS.root;
		
		var createDir = function(dir){
		
			root.getDirectory(dir, {
				create : true,
				exclusive : false
			}, successCB, failCB);
		};
		
		
        
		var successCB = function(entry){
		
			root = entry;
			if(dirs.length > 0){
				createDir(dirs.pop());
			}else{
	
				success(entry);
			}
			
		};
		
		var failCB = function(){
		   
			toaster.pop('error', "Export", "Exporting Failed!");
		};
		
		createDir(dirs.pop());
    
    }
    function gotFileEntry(fileEntry) {
        fileEntry.createWriter(gotFileWriter, fail);
        fileEntry.file(gotFile,fail);        
    }
    function gotFile(file)
    {
     
      readAsText(file);
    }
      function readAsText(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("Read as text");
            console.log(evt.target.result);
           
        };
        reader.readAsText(file);
       
    }
   

    function gotFileWriter(writer) {
        writer.onwriteend = function(evt) {
        
            writer.truncate(10000);  
            
            writer.onwriteend = function(evt) {
              
                writer.seek(writer.length);
                writer.write(" different text");
                writer.onwriteend = function(evt){
                 
                }
            };
        };
        
         var str = '';
         for(var key in obj)
         {
            str = key.toString() + "," + str;
         }
        
         
         
    var array = typeof obj != 'object' ? JSON.parse(obj) : obj;
    console.log(obj);
    var str = '';
    var line = '';

        var head = array[0];
        
            for (var index in array[0]) {
                var value = index + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
 
      

        line = line.slice(0, -1);
        str += line + '\r\n';


    for (var i = 0; i < array.length; i++) {
        var line = '';

            for (var index in array[i]) {
                var value = array[i][index] + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }
 
         writer.write(str);
         toaster.pop('success', "Export", "Exporting Success!");
          write.abort();
        
          
    }

    function fail(error) {
      
        toaster.pop('error', "Export", "Exporting Failed!");
    }                                                                           
    };
                            
    
}])

.directive('ngWhonavbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'Views/navbar.html'
  }
})

.directive('ngWhoheader',function(){

return{
    restrict: 'E',
    templateUrl:'Views/header.html'
}
})


.directive('ngFacilitypage', function(){
    return{
        restrict: 'E',
        templateUrl: 'Views/facilityPage.html'
    }
});






System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent, MEMBERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.members = MEMBERS;
                    this.name = "Name of Employee";
                    this.id = "Employee ID";
                    this.dob = "Date of birth";
                    this.gender = "Gender";
                    this.jt = "Job Title";
                    this.branch = "Branch";
                    this.ws = "Work Status";
                    this.company = "Company";
                }
                AppComponent.prototype.onKenClick = function (e) {
                    this.name = e.name;
                    this.id = e.id;
                    this.dob = e.dob;
                    this.gender = e.gender;
                    this.jt = e.jt;
                    this.branch = e.branch;
                    this.ws = e.ws;
                    this.company = e.company;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'partials/app.html',
                        styleUrls: ['css/app.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            MEMBERS = [
                {
                    "name": "Arun Sai",
                    "id": "asai",
                    "dob": "06/12/1974",
                    "gender": "Male",
                    "jt": "Java Developer",
                    "branch": "Herndon VA",
                    "ws": "Green Card",
                    "company": "SSTech LLC"
                },
                {
                    "name": "Ashish Daniel",
                    "id": "adaniel",
                    "dob": "08/09/1980",
                    "gender": "Male",
                    "jt": "Software QA Analyst",
                    "branch": "Vizag India",
                    "ws": "H1-B",
                    "company": "CapMark Solutions"
                },
                {
                    "name": "David Warner",
                    "id": "dwarner",
                    "dob": "09/22/1989",
                    "gender": "Male",
                    "jt": "Software Developer Trainee",
                    "branch": "Herndon, VA",
                    "ws": "OPT",
                    "company": "SSTech LLC"
                },
                {
                    "name": "Jack Ma",
                    "id": "jma",
                    "dob": "07/11/1990",
                    "gender": "Male",
                    "jt": "HR Assistant",
                    "branch": "Tampa",
                    "ws": "Citizen",
                    "company": "SSTech INC"
                },
                {
                    "name": "Jaden Smith",
                    "id": "jsmith",
                    "dob": "02/27/1993",
                    "gender": "Male",
                    "jt": "Jr. System Engineer",
                    "branch": "Tampa",
                    "ws": "Citizen",
                    "company": "SSTech LLC"
                },
                {
                    "name": "John Smith",
                    "id": "jsmith",
                    "dob": "01/11/1989",
                    "gender": "Male",
                    "jt": "IT Consultant",
                    "branch": "Tampa",
                    "ws": "H1-B",
                    "company": "Techpillars"
                },
                {
                    "name": "Mellisa Jones",
                    "id": "mjones",
                    "dob": "08/09/1982",
                    "gender": "Female",
                    "jt": "Programmer Analyst",
                    "branch": "Dallas TX",
                    "ws": "H1-B",
                    "company": "SSTech LLC"
                },
                {
                    "name": "Sathwik Chowdary",
                    "id": "schowdary",
                    "dob": "09/08/1989",
                    "gender": "Male",
                    "jt": "Jr. Account Executive",
                    "branch": "Tampa",
                    "ws": "None",
                    "company": "SSTech INC"
                },
                {
                    "name": "Vaibhav Kumar",
                    "id": "vkumar",
                    "dob": "05/14/1983",
                    "gender": "Male",
                    "jt": "Sr. Software QA Analyst",
                    "branch": "California",
                    "ws": "H1-B",
                    "company": "SSTech LLC"
                },
                {
                    "name": "Vijay Kalyan",
                    "id": "vkalyan",
                    "dob": "12/19/1984",
                    "gender": "Male",
                    "jt": "Business Analyst Sr (BOBJ DEV)",
                    "branch": "Dallas TX",
                    "ws": "H1-B",
                    "company": "SSTech LLC"
                },
                {
                    "name": "Vikas Kumar Gona",
                    "id": "vgona",
                    "dob": "12/19/1984",
                    "gender": "Male",
                    "jt": "Business Analyst JR",
                    "branch": "Hyderabad India",
                    "ws": "H1-B",
                    "company": "SSTech LLC"
                },
                {
                    "name": "Vinay Raju",
                    "id": "vraju",
                    "dob": "12/19/1984",
                    "gender": "Male",
                    "jt": "Python Developer",
                    "branch": "Atlanta GA",
                    "ws": "H1-B",
                    "company": "SSTech LLC"
                },
                {
                    "name": "Vishwesh Kalakuntla",
                    "id": "vkalakunta",
                    "dob": "12/19/1984",
                    "gender": "Male",
                    "jt": "Java Developer",
                    "branch": "Hyderabad India",
                    "ws": "H1-B",
                    "company": "SSTech LLC"
                },
                {
                    "name": "Zameer Siddique",
                    "id": "zsiddique",
                    "dob": "12/19/1984",
                    "gender": "Male",
                    "jt": "Perl Developer",
                    "branch": "Tampa",
                    "ws": "OPT",
                    "company": "SSTech LLC"
                }
            ];
        }
    }
});

//# sourceMappingURL=app.component.js.map

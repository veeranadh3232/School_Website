import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import AboutFounder from './About/AboutFounder';
import Academic from './About/Academic';
import Principal from './About/Principal';
import School from './About/School';
import AssessmentPolicy from './Acadamics/AssessmentPolicy';
import BeyondAcademics from './Acadamics/BeyondAcademics';
import MiddleSchool from './Acadamics/MiddleSchool';
import CoCurricularActivities from './Student Life/CoCurricularActivities';
import EducationalFramework from './Student Life/EducationalFramework';
import ExtraCurricularActivities from './Student Life/ExtraCurricularActivities';
import Facilities from './Student Life/Facilities';
import SafetySecurity from './Student Life/SafetySecurity';
import Carrers from './Carrers';
import ContactUs from './ContactUs';
import Gallery from './Gallery';
import Transport from './Transport';
import MandatoryDiscloure from './MandatoryDiscloure';
import PrePrimary from './Acadamics/PrePrimary';
import PrimarySchool from './Acadamics/PrimarySchool';
import OfflineRegistration from './Admissions/OfflineRegistration';
import AgeCriteria from './Enrollment/AgeCriteria';
import DocumentRequired from './Enrollment/DocumentRequired';
import EnrollmentGuide from './Enrollment/EnrollmentGuide';
import FeeStructure from './Enrollment/FeeStructure';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
    <Route path='/' element={<Home/>}/>

    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/academic' element={<Academic/>}/>
    <Route path='/principal' element={<Principal/>}/>
    <Route path='/school' element={<School/>}/>
    <Route path='/assesmentpolicy' element={<AssessmentPolicy/>}/>
    <Route path='/beyondacademics' element={<BeyondAcademics/>}/>
    <Route path='/middileschool' element={<MiddleSchool/>}/>
    <Route path='/preprimary' element={<PrePrimary/>}/>
    <Route path='/primary' element={<PrimarySchool/>}/>

    <Route path='/offlineregister' element={<OfflineRegistration/>}/>
    <Route path='/agecriteria' element={<AgeCriteria/>}/>
    <Route path='/documentrequired' element={<DocumentRequired/>}/>
    <Route path='/enrollmentguide' element={<EnrollmentGuide/>}/>
    <Route path='/feestructure' element={<FeeStructure/>}/>

    {/* <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/> */}

    <Route path='/curricular' element={<CoCurricularActivities/>}/>
    <Route path='/educationframework' element={<EducationalFramework/>}/>
    <Route path='/extracurricular' element={<ExtraCurricularActivities/>}/>
    <Route path='/facilities' element={<Facilities/>}/>
    <Route path='/safetysecurity' element={<SafetySecurity/>}/>


    <Route path='/carrers' element={<Carrers/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/transport' element={<Transport/>}/>
    <Route path='/mandatorydisclosure' element={<MandatoryDiscloure/>}/>
 
 
{/*  
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/>
    <Route path='/aboutfounder' element={<AboutFounder/>}/> */}

  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

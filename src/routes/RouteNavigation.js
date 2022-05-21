import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/home";

import Acne from "../pages/acne";
import Scars from "../pages/scars";
import wrinkles from "../pages/wrinkles";
import HairTransplant from "../pages/hairTransplant";
import Laser from "../pages/laser";
import HairLoss from "../pages/hairLoss";
import SpiderVeins from "../pages/spiderVeins";
import DarkCircles from "../pages/darkCircles";
import HyperPigmentation from "../pages/hyperPigmentation";
import WartsAndCorns from "../pages/wartsAndCorns";
import StretchMarks from "../pages/stretchMarks";
import SkinTagsAndMoles from "../pages/skinTagsAndMoles";
import SkinDisease from "../pages/skinDisease";
import OpenPores from "../pages/openPores";
import Melasma from "../pages/melasma";
import Freckles from "../pages/freckles";

import MediFacial from "../pages/mediFacial";
import GlutathioneInjections from "../pages/glutathioneInjections";
import Mesotherapy from "../pages/mesotherapy";
import Microdermabrasion from "../pages/microdermabrasion";
import Photofacials from "../pages/photofacials";

import SkinHydration from "../pages/skinHydration";
import AntiWrinkleInjections from "../pages/antiWrinkleInjections";
import FineLinesandWrinkles from "../pages/fineLinesandWrinkles";
import InjectableFillers from "../pages/injectableFillers";

import ChemicalPeels from "../pages/chemicalPeels";
import ScarTreatments from "../pages/scarTreatments";
import SkinTightening from "../pages/skinTightening";
import FaceLiftAndThreadLift from "../pages/faceLiftAndThreadLift";
import ExcessiveSweating from "../pages/excessiveSweating";
import BridalSkinCare from "../pages/bridalSkinCare";
import SkinPRP from "../pages/skinPRP";
import DNABBTreatment from "../pages/dnaBBTreatment";
import DNALightenUp from "../pages/dnaLightenUp";

import HairFall from "../pages/hairFall";
import HairGrowth from "../pages/hairGrowth";
import HairTexture from "../pages/hairTexture";
import HairDiseases from "../pages/hairDiseases";

import FemaleHairTransplantation from "../pages/femaleHairTransplantation";
import MaleHairTransplantation from "../pages/maleHairTransplantation";
import PermanentHairRemoval from "../pages/permanentHairRemoval";
import PRPAndGFR from "../pages/prpAndGfr";

import LowLevelLaserTherapy from "../pages/lowLevelLaserTherapy";
import HairSpa from "../pages/hairSpa";
import DNARiseAndShine from "../pages/dnaRiseAndShine";

import Liposuction from "../pages/liposuction";
import FatAndCellulite from "../pages/fatAndCellulite";
import BodyPolishing from "../pages/bodyPolishing";
import BodySkinCare from "../pages/bodySkinCare";
import DoubleChin from "../pages/doubleChin";
import InchLoss from "../pages/inchLoss";
import TummyTuck from "../pages/tummyTuck";
import TattooRemoval from "../pages/tattooRemoval";

import TermsAndConditions from "../pages/termsAndConditions";
import PrivacyPolicy from "../pages/privacyPolicy";
import Testimonials from "../pages/testimonials";
import Videos from "../pages/videos";
import PressAndMedia from "../pages/pressAndMedia";

class RouteNavigation extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/acne" component={Acne} />
            <Route exact path="/scars" component={Scars} />
            <Route exact path="/wrinkles" component={wrinkles} />
            <Route exact path="/hair-transplant" component={HairTransplant} />
            <Route exact path="/laser" component={Laser} />
            <Route exact path="/hair-loss" component={HairLoss} />
            <Route exact path="/spider-veins" component={SpiderVeins} />
            <Route exact path="/dark-circles" component={DarkCircles} />

            <Route exact path="/hyperpigmentation" component={HyperPigmentation} />
            <Route exact path="/warts-and-corns" component={WartsAndCorns} />
            <Route exact path="/stretch-marks" component={StretchMarks} />
            <Route exact path="/skin-tags-and-moles" component={SkinTagsAndMoles} />
            <Route exact path="/skin-disease" component={SkinDisease} />
            <Route exact path="/open-pores" component={OpenPores} />
            <Route exact path="/melasma" component={Melasma} />
            <Route exact path="/freckles" component={Freckles} />

            <Route exact path="/medi-facial" component={MediFacial} />
            <Route exact path="/glutathione-injections" component={GlutathioneInjections} />
            <Route exact path="/mesotherapy" component={Mesotherapy} />
            <Route exact path="/microdermabrasion" component={Microdermabrasion} />
            <Route exact path="/photofacials" component={Photofacials} />

            <Route exact path="/skin-hydration" component={SkinHydration} />
            <Route exact path="/anti-wrinkle-injections" component={AntiWrinkleInjections} />
            <Route exact path="/fine-lines" component={FineLinesandWrinkles} />
            <Route exact path="/injectable-fillers" component={InjectableFillers} />

            <Route exact path="/chemical-peels" component={ChemicalPeels} />
            <Route exact path="/scar-treatment" component={ScarTreatments} />
            <Route exact path="/skin-tightening" component={SkinTightening} />
            <Route exact path="/tatoo-removal" component={TattooRemoval} />
            <Route exact path="/face-lift-and-thread-lift" component={FaceLiftAndThreadLift} />
            <Route exact path="/excessive-sweating" component={ExcessiveSweating} />
            <Route exact path="/bridal-skin-care" component={BridalSkinCare} />
            <Route exact path="/skin-prp" component={SkinPRP} />
            <Route exact path="/dna-bb-treatment" component={DNABBTreatment} />
            <Route exact path="/dna-lighten-up" component={DNALightenUp} />

            <Route exact path="/hair-fall" component={HairFall} />
            <Route exact path="/hair-growth" component={HairGrowth} />
            <Route exact path="/hair-texture" component={HairTexture} />
            <Route exact path="/hair-diseases" component={HairDiseases} />

            <Route exact path="/female-hair-transplant" component={FemaleHairTransplantation} />
            <Route exact path="/male-hair-transplant" component={MaleHairTransplantation} />
            <Route exact path="/permanent-hair-removal" component={PermanentHairRemoval} />
            <Route exact path="/prp-and-gfr" component={PRPAndGFR} />

            <Route exact path="/low-level-laser-therapy" component={LowLevelLaserTherapy} />
            <Route exact path="/hair-spa" component={HairSpa} />
            <Route exact path="/hair-rise-n-shine" component={DNARiseAndShine} />

            <Route exact path="/liposuction" component={Liposuction} />
            <Route exact path="/fat-and-cellulite" component={FatAndCellulite} />
            <Route exact path="/body-polishing" component={BodyPolishing} />
            <Route exact path="/body-skin-care" component={BodySkinCare} />
            <Route exact path="/double-chin" component={DoubleChin} />
            <Route exact path="/inch-loss" component={InchLoss} />
            <Route exact path="/tummy-tuck" component={TummyTuck} />

            <Route exact path="/terms-and-conditions" component={TermsAndConditions} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/testimonials" component={Testimonials} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/press-and-media" component={PressAndMedia} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default RouteNavigation;

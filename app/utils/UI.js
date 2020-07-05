

//CAUTION!!!!!
/***************************************** 

     DO NOT MODIFY PROPERTIES IT MAY LEAD TO APP CRASHING

*/




//******************************************************************************************************************************************* */

//login strings

export const Login = {

    signupBtn:"Sign up",

    loginPageHeader:"Login to Hanwok",

    forgotPasswordBtn:"Forgot password?",

    //Terms and condition is array because some of words are wrapped in text tags for special styling
    termsAndCondition:["By continuing, i accept the Terms of ","Services,","community guidelines"," and i have read the ","Privacy policy"],

    loginFailedStatus:"Login Failed",

    loginBtn:"Log in"

}


//******************************************************************************************************************************************* */


//signup strings 

export const SignUp = {

    signUpHeader:"Sign Up to Hanwok",

    signupFailedStatus:"Sign up Failed",

    signUpBtn:"Sign up"
}


//******************************************************************************************************************************************* */


//ChatList

export const ConversationList = {

   chatListHeader:"Messages",

   chatListConnectionFailed:"Oops could not get chatList please check internet Connection",

   chatListEmptyList:"No conversations yet click on a customer or someone from your customer list to start a chat."

}


//******************************************************************************************************************************************* */


//CustomerPage

export const CustomerPage = {

    loadMoreString : "Load More",

    customersPageHeader:"Customers",
    
    getCustomerConnectionFailure:"Oops could not get customers please check internet Connection",

    emptyCustomerList:"You dont have customers yet."

}



//******************************************************************************************************************************************* */


//CustomerToPage 

export const CustomerToPage = {

    customerToPageHeader:"CustomersTo",

    getCustomerToConnectionFailure:"Oops could not get CustomersTo please check internet Connection",

    emptyCustomerToList:"You are not a customer to anyone yet",

}


//******************************************************************************************************************************************* */


//Favourite  Page

export const FavouritePage = {

    FavouritePageHeader:"Favourites",

    getFavouriteConnectionFailed:"Oops could not get favourites please check internet Connection",

    emptyFavouritesList:"You don't have any favourites yet"

}


//******************************************************************************************************************************************* */

//Home OR Feeds

export const Feeds = {
   hanwokString:"Hanwok",
   //Intro messages when signup without interest or location setup
   introHeader1:"Hi",
   introHeader2:"Wecome to Hanwok",
   introMessage:"Hanwok is a place where we try as much as we can to show you content base on your location and interest it seems you have not set location or interest yet please update your profile to be able to see content here.",

   introRedirectToUpdateBtnString:"Update Profile",
   getFeedsFailed:"Oops could not get feeds",

   //emptyFeeds even when interest and location are provided
   emptyFeedsHeader:"Oops No content Right!!!",

   emptyFeedsMessage:"Lets update your profile and get some content for you by adding more interests",

   emptyFeedsRedirectToUpdateLocation:"Update Profile",

   commentBtn:"comment"


}

//******************************************************************************************************************************************* */

//Location SetUp page for SignUp

export const LocationPage = {

  permissionAlertHeader:"Privacy",
  permissionAlertMessage:"Hanwok will use your current location as your  location.You will be promted to allow hanwok access your location if it is turned off and your current location will be used in order of country, state and local gorvernment so that hanwok can show you content related to people around you.",

  permissionAlertGrantedBtnString:"ALLOW",
  permissionAertDeniedBtnString:"DONT ALLOW",

  skipString:"Skip",

  locationPageHeader:"Setup Location.",

  locationPageMessage:"Hanwok requires your location to give you formatted address that will enable others see your Jobs and will also determines people you see on hanwok",

  locationSetupFailed:"Locating Failed",

  setUpLocationBtnString:"Continue",
}

//******************************************************************************************************************************************* */

//MESSAGING PAGE
export const MessagingPage = {
    statusActive:"Active",
    statusOnline:"Online",
    statusUnAvailable:"Unavailable"
}

//******************************************************************************************************************************************* */

//POSTJOB PAGE
export const PostJobPage = {

    noSkillPresentUpdateProfileString:"Edit Profile",

    gettingUserSkillStatus:"Getting Skills ..... ",

    gettingUserSkillsFailed:"Getting skills failed Please try again",

    retryGettingSkills:"Retry",

    noSkillsMessage:"Hanwok requires skills before posting a job. Edit profile and some skills.",

    selectSkillHeader:"Select Type of job",

    galleryBtn:"Gallery",

    postJobString:"post job",


}


//******************************************************************************************************************************************* */


//MORE USER aCTION PAGE FROM PROFILE


export const ProfileOthersInfo = {

    header:"Manage Account",

    favouritesList:"Favourites",

    Recommendations:"Recommended",

    Customers : "Customers",

    CustomersTo:"CustomersTo",

    AccountSetting:"Account Settings",

    checkUpdate:"Check Update",

    logOut :"LogOut"

}

//******************************************************************************************************************************************* */


//PROFILE PAGE
export const ProfilePage = {

     editProfileBtn:"Edit Profile",

     updatingProfileOngoingBtn:"Updating ....",

     noBiographyMessage:"Write a biography",

     getJobsFailed:"Oops could not get jobs please check internet Connection",


     emptyJobsMessage:"You have not posted any job yet. Post  jobs and you will see them here. post your first job",

     postJobPageLinkBtn:"Post Job"

}

//******************************************************************************************************************************************* */

//RECOMMENDATION PAGE
export const RecommendationPage = {

    //could not find user alertPopup to share or not to share the message sample is

    //e.g the curly braces represent variables

    // {094848484848} is not on hanwok press share to invite  {David May}

    shareAlert : " is not on hanwok press share to invite ",

    shareBtnGranted:"SHARE",

    shareBtnDenied:'CANCEL',

    pageHeader:"Contacts",

    pageSubHeader:"select a contact to recommend",

    searchContactPlaceHolder:"Search contact by name",

    gettingContact:"Getting contacts...",



    
}

//******************************************************************************************************************************************* */

//RECOMMENDED PAGE
export const RecommendedPage = {
    header:"Recommendations",
    
    getRecommendedFailed:"Oops could not get recommendations please check internet Connection",

    emptyRecommended:"You don't have any recommendation yet"
    
}


//SELECT INTEREST

//******************************************************************************************************************************************* */

export const SelectInterestPage = {
    header:"Select An Interest",

    subHeader:"Hanwok requires your interest to show you jobs of people around you.",

    dismissSubheaderBtn:"close",

    attemptToSaveInterestWhenNoneSelected:"Please select at least one Interest to continue or skip instead",

    skipPage:"Skip",

    searchSkillBtn:"Search",

    retryGetInterestBtn:"Retry",

    savingInterestFailed:"Saving Failed",

    saveInterestSelected:"DONE"

}



//******************************************************************************************************************************************* */

//UPDATE SKILL

export const SkillUpdate = {
    finishedSelectingSkills:"Done",
    searchBtn:"Search",
    retryGettingSkills:"Retry"

}


//******************************************************************************************************************************************* */

//UPDATE INTEREST
export const InterestUpdate = {
    finishedSelectingInterests:"Done",
    searchBtn:"Search",
    retryGettingInterests:"Retry"

}



//******************************************************************************************************************************************* */

//UPDATE PROFILE 

export const UpdateProfilePage = {
    changesAlertHeader:"Disacard unsaved changes ?",
    changesAlertMessage:"Are you sure you want to discard last changes that are not saved ?",

    changesDiscard:"Discard",

    changesCancel:"cancel",

    locationResultHeader:"Nearest Locations",

    locationResultSubHeader:'Please select nearest location before describing your buisness location base on the nearest location.',
    
    editingPageHeader:'Edit Profile',

    saveChanges:"Save",

    //Labels update profile

    firstName: "First name",

    lastName:  "Last name",

    bio    : "Bio",

    location: "Location",

    btnUpdateString:"update",

    buisness_location:"Buisness location",

    nearestLocation:'Nearest Location',

    addInterestOrSKillStringBtn:"Add"
}


//******************************************************************************************************************************************* */


//VERIFYCODE

export const VerifyPhone = {
    
    pageHeader:"Verification Code",
    
    verifyBtn:"Verify Code",
    
    verificationPageFooterCall:"A verification code have been sent to the phone number you sign up with via phone call. Please enter verification code and press verify to continue",
  
    verificationPageFooterSms:"A verification code have been sent to the phone number you sign up with. Please enter verification code and press verify to continue",

    confirmationSuccessSignUp:"Signing in to Hanwok....",

    changingPassword:"Resseting your password....",

    sendingVerification:"Sending Verification code to ",//then phone number
    sendingVerificationStatus:"please wait....",

    useVoiceCallBtn:"USE VOICE CALL",

    resendBtn:"RESEND CODE ?",

    btnOr:"OR"
 
    
}


//******************************************************************************************************************************************* */

//VIEW JOBPAGE

export const ViewJobPage = {

    gettingCommentFailed:"Oops could not get Comments please check internet Connection",

    emptyComment:"No comments",

    commentString:"comment",

    processingCustomerStatus:""
}

//******************************************************************************************************************************************* */


//VIEW PROFILE

export const ViewProfilePage = {

    processingCustomerStatus:"Processing...",

    customer:"Customer",

    becomeCustomerBtn:"Become Customer",

    getUserJobsFailed:"Oops could not get jobs please check internet Connection",

    emptyJobs:"You have not posted any job"


}

//******************************************************************************************************************************************* */

//SAGA  FOR IMPROVEMENT

export const sagaRequestStatus = {
   
    connectionFailed:"unable to connect to the internet please try again",
   
    failedToGetLocation:"Unable to get Please make sure you allow hanwok access your location.",
    
    errorUpdatingProfileMessage:"Unable to finish updating profile please try again",
   
    errorSelectingPicture:"Unable to select pictures please try again",
   
    errorPostingJob:"unable to process job post",
    
    errorGetingFeeds:"unable to get feeds please retry",

}


//******************************************************************************************************************************************* */

//FUNCTIONS RETURNS
export const functionsStrings = {
   
    pictureUploadError:"Error in uploading pictures try please try again",

    connectionError:"unable to upload job pictures please check your connection and try again",

    compressingImageError:"OOps something went wrong unable to post job",

    permissionError:"Hanwok requires your permission to access device utilities",

    imagePickerError:"Ooos something went wrong picking image",

    pictureUploadingError:"Error in uploading pictures try please try again",

    croppingImageError:"Error Could not crop image please try again",
}



   function loadHome() {   $.mobile.changePage( "index.html", { transition: "slideup", changeHash: false });}
   function loadBack() {   $.mobile.changePage( "index.html", { transition: "slideup", changeHash: false });}

   function loadColin() {   $.mobile.changePage( "c1.html", { transition: "slide", changeHash: false });}
   function loadVaughan() {   $.mobile.changePage( "v1.html", { transition: "slide", changeHash: false });}
   function loadBrandon() {   $.mobile.changePage( "b1.html", { transition: "slide", changeHash: false });}




   function loadV1() {   $.mobile.changePage( "v1.html", { transition: "slideup", changeHash: false });}
   function loadV2() {   $.mobile.changePage( "v2.html", { transition: "slideup", changeHash: false });}
   function loadV3() {   $.mobile.changePage( "v3.html", { transition: "slideup", changeHash: false });}


   function loadC1() {   $.mobile.changePage( "c1.html", { transition: "slideup", changeHash: false });}
   function loadC2() {   $.mobile.changePage( "c2.html", { transition: "slideup", changeHash: false });}
   function loadC3() {   $.mobile.changePage( "c3.html", { transition: "slideup", changeHash: false });}

   function loadB1() {   $.mobile.changePage( "b1.html", { transition: "slideup", changeHash: false });}
   function loadB2() {   $.mobile.changePage( "b2.html", { transition: "slideup", changeHash: false });}
   function loadB3() {   $.mobile.changePage( "b3.html", { transition: "slideup", changeHash: false });}



  /*
    * Allows an application to go to the specified page for performing back operations.
  */
  function loadBackPage() {

  }


  /*
    * Loads and navigate to the group members page.
  */
  function loadMembersPage() {
    $.mobile.changePage( "main.html", { transition: "slide", changeHash: false });
  }

  /*
    * Loads the home page of the applications and navigates there.
  */
  function loadHome() {
    $.mobile.changePage( "index.html", { transition: "slideup", changeHash: false });
  }

  /*
    * Given the name of a person and the tab, loads and changes to the page required.
    * @param {string} person: The name of the person we will be switching to
    * @param {string} tab:    The tab of this persons profile we will be swapping to
  */
   function loadProfilePageFor(person, tab, transition) {

      // If we are given no transition, we will fall back on slideup
      transition = transition || "slideup";

      person = person.toLowerCase()
      tab = tab.toLowerCase();
      fragment = person + "_" + tab;

      $.mobile.changePage(fragment + ".html", { transition: transition, changeHash: false });
   }

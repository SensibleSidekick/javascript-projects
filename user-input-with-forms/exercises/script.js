//Code Your Solution Below
window.addEventListener('load', function() {
    const form =document.getElementById('form');
    const button = document.getElementById('button');
    const testName = document.querySelector('input[name=testName]');

    form.addEventListener('submit', event => {
      
        const testName = document.querySelector('input[name=testName]');
        const testDate = document.querySelector('input[name=testDate]');
        const rocketType = document.querySelector('input[name=rocketType]');
        const boosterCount = document.querySelector('input[name=boosterCount]');
        const windRating = document.querySelector('input[name=windRating]:checked');
        //const productionServers = document.getElementById('productionServers');

      if (testName.value.trim() === '') {
          this.window.alert("Please enter a test name");
          event.preventDefault();
      } else if (testDate.value === '') {
        this.window.alert("Please choose a date for your test.");
          event.preventDefault();
      } else if (boosterCount.value === '') {
        this.window.alert("Please enter amount of boosters needed.");
          event.preventDefault();
      } else if (!windRating) {
        this.window.alert("Please indicate current wind rating.");
          event.preventDefault();
      }
   })
  //  form.addEventListener('submit', function (event) {
  //      const testName = document.querySelector('input[name=testName]');
  //      const testDate = document.querySelector('input[name=testDate]');
  //      const rocketType = document.querySelector('input[name=rocketType]');
  //      const boosterCount = document.querySelector('input[name=boosterCount]');
  //      const windRating = document.querySelector('input[name=windRating]:checked');
  //      //const productionServers = document.getElementById('productionServers');
//
  //    if (testName.value.trim() === '') {
  //        alert("Please enter a test name");
  //        event.preventDefault();
  //    } else if (!testDate) {
  //        alert("Please choose a date for your test.");
  //        event.preventDefault();
  //    } else if (rocketType.value === 0) {
  //        alert("Please choose a rocket type.");
  //        event.preventDefault();
  //    } else if (!boosterCount) {
  //        alert("Please enter amount of boosters needed.");
  //        event.preventDefault();
  //    } else if (!windRating) {
  //        alert("Please indicate current wind rating.");
  //        event.preventDefault();
  //    }
  //  });
});
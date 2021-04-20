import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
// import ENV from '../config/environment';

export default class SignUpController extends Controller {

    @tracked password;
    @tracked confirmPassword;

    constructor(){
        super(...arguments);
        //alert(JSON.stringify(ENV.APP.endPointBackend));
    }

    @action
    signUp(event) {
      event.preventDefault();
      event.stopPropagation();
      var forms =  document.querySelectorAll('.validate-sign-up');
      
      Array.prototype.slice.call(forms)
      .forEach( (form) => {
        (form.checkValidity())? alert(event.target) :form.classList.add('was-validated');

        let elConfirmPassword = document.getElementById("confirm_password");
        (this.confirmPassword != this.password)? elConfirmPassword.setCustomValidity("Passwords Don't Match"):
            elConfirmPassword.setCustomValidity('');

      });
    }
}

import { ComponentService } from '../services/component.service.js';
import { ErrorService } from '../services/error.service.js';
import { parseInput } from '../utils/parse-inputs.js';
import { validateInputs } from '../utils/validate-inputs.js';

// const q = document.getElementById('error');
// console.log(q);

export const app = () => {
    const componentService = new ComponentService();
    const errorService = new ErrorService();

    errorService.hideError(); //*** */

    const calTotal = () => {
        errorService.hideError();
        const inputs = componentService.getInputs(); //*** */ ได้ array ของ input
        const numbers = parseInput(...inputs); // [1,2,4] , ...[1,2,4] == 1,2,4
        const valid = validateInputs(...numbers);

        if (valid) {
            const [price, quantity, shipping] = numbers;
            const totalPrice = price * quantity + shipping;
            componentService.showPrice(totalPrice); // Display ราคา
        } else {
            errorService.showErrorMessage(inputs, numbers); //*** */
        }
    };

    componentService.onClick(calTotal); //*** */
};

//app();

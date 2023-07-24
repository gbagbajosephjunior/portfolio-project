export class Customer {
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    password: string = '';
    message: string = '';
    phone: string = '';
    sendCatalog = false;
    addressType = 'home';
    street1?: string = '';
    street2?: string = '';
    city?: string = '';
    state: string = '';
    zip?: string = '';
}

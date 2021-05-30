import {errorOptions} from "./constants";
import {toast} from 'react-toastify';

export function getFullName(player) {
    const {firstName, middleName, lastName} = player;
    let fullName = firstName;
    fullName += " " + middleName ? middleName + " " + lastName : lastName
    return fullName
}

export function checkFlag(country) {
    return country === 'EN' ? 'GB' : country
}

export function getAge(date) { // birthday is a date
    const _date = new Date(date);
    const ageDifMs = Date.now() - _date.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function showError(text) {
    toast.error(text, errorOptions);
}

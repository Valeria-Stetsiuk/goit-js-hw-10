import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import * as debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(onInputBox, DEBOUNCE_DELAY));
function onInputBox(evt) {}

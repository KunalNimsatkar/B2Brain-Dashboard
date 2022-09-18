const AccountDropdown = document.querySelector('.account_wrapper');
const PreferenceDropdown = document.querySelector('.preference_wrapper');
const AccountCollapase = document.querySelector('.account_collapase');
const PreferenceCollapase = document.querySelector('.preference_collapase')
const AccountArrow = document.querySelector('.account_arrow');
const PreferenecArrow = document.querySelector('.preference_arrow');


AccountCollapase.addEventListener('click', () => {
    AccountArrow.classList.toggle('dropdown_rotate');
    AccountDropdown.classList.toggle('block');
} )

PreferenceCollapase.addEventListener('click', () => {
    PreferenecArrow.classList.toggle('dropdown_rotate');
    PreferenceDropdown.classList.toggle('block');
})
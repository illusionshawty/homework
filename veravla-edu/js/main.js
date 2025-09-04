
// modal_input

document.querySelector('#phone').onkeydown = function(e){
inputphone(e,document.querySelector('#phone'))
}

function inputphone(e, phone){
function stop(evt) {
    evt.preventDefault();
}
let key = e.key, v = phone.value; not = key.replace(/([0-9])/, 1)

if(not == 1 || 'Backspace' === not){
if('Backspace' != not){ 
    if(v.length < 3 || v ===''){phone.value= '+7('}
    if(v.length === 6){phone.value= v +')'}
    if(v.length === 10){phone.value= v +'-'}
    if(v.length === 13){phone.value= v +'-'}
    }
} else{stop(e)}  }


    // modal

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.hero__button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }
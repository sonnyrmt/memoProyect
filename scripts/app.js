import { callModal } from './modal.js';
import { factory } from './colors.js';

let topicArray = [];
const mainContainer = document.querySelectorAll('.division');

document.addEventListener('DOMContentLoaded', () => {
    callModal();
    topicArray = JSON.parse(localStorage.getItem("topic")) || [];
    createInfo();
});

export const inputs = (obj) => {
    topicArray = [...topicArray, obj];

    createInfo(parseInt(obj.checked));  
}

const createInfo = () => {
    clear();

    if(topicArray.length > 0) {
        topicArray.forEach(data => {
            const { title,exp,code,optional,checked,id } = data;

            const codeColorized = factory(code);    

            const topicContainer = document.createElement('div');
            const titleContainer = document.createElement('h4');
            const expContainer = document.createElement('p');
            const codeContainer = document.createElement('div');
            const codeInfo = document.createElement('span');
            const optionalContainer = document.createElement('p');
            const deleteBtn = document.createElement('button');

            topicContainer.classList.add('newTheme');
            titleContainer.classList.add('title');
            expContainer.classList.add('explanation');
            codeContainer.classList.add('code-container');
            optionalContainer.classList.add('note');
            deleteBtn.classList.add('btn', 'btn-outline-danger', 'btn-sm');


            titleContainer.textContent = title;
            expContainer.textContent = exp;
            optionalContainer.textContent = optional || '';
            deleteBtn.textContent = 'Borrar';

            deleteBtn.onclick = function() {
                deleteTopic(id);
            }

            codeInfo.innerHTML = codeColorized;
            codeContainer.appendChild(codeInfo);

            topicContainer.appendChild(titleContainer);
            topicContainer.appendChild(expContainer);
            topicContainer.appendChild(codeContainer);
            topicContainer.appendChild(optionalContainer);
            topicContainer.appendChild(deleteBtn);

            if(optional === '') {
                optionalContainer.remove();
            }
            if(code === '') {
                codeContainer.remove();
            }
            
            mainContainer[parseInt(checked)].appendChild(topicContainer);

        });
    }

    localStorage.setItem("topic", JSON.stringify(topicArray));
}

const clear = () => {
    mainContainer[0].innerHTML = '';
    mainContainer[1].innerHTML = '';
} 

const deleteTopic = (topicId) => {
    topicArray = topicArray.filter( topic => topic.id !== topicId );
    createInfo();
}
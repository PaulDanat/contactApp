const tableKey = 'cms-table';
let cmsTable;
let cmsTableDemo = {};

document.getElementById('SortButton').addEventListener('click', () => {
    const sortedKeys = Object.keys(cmsTable).sort();
    const tempTable = {};
    sortedKeys.forEach(key => tempTable[key] = cmsTable[key]);
    cmsTable = tempTable;
    refreshTable();
});

let enableDisableNameInput = (option) => {
    let newPersonName = document.getElementById('newPersonName');
    if(option === 'enable')
        newPersonName.disabled = false;
    else if (option === 'disable')
        newPersonName.disabled = true;
}

let refreshTable = () => { 
    let cmsTableKeys = Object.keys(cmsTable);
    let tableContaier = document.getElementById('cmsTableContainer');
    let oldTableBody = document.getElementById('tableBody');
    tableContaier.removeChild(oldTableBody);
    let newTableBody = document.createElement('span');
    newTableBody.id = 'tableBody';
    tableContaier.appendChild(newTableBody);
    

    for(let i = 0; i < cmsTableKeys.length;i++){
        let currentRow = document.createElement('div');
        let currentNameCol = document.createElement('div');
        let currentEmailCol = document.createElement('div');
        let currentPhoneCol = document.createElement('div');
        let currentAddressCol = document.createElement('div');
        let currentStateCol = document.createElement('div');
        let currentCountryCol = document.createElement('div');
        let currentEditBtn = document.createElement('div');
        let currentDeleteBtn = document.createElement('div');


        currentRow.className = 'cm-table-row';
        currentNameCol.className = 'cm-table-column cm-name';
        currentEmailCol.className = 'cm-table-column cm-email';
        currentPhoneCol.className = 'cm-table-column cm-phone';
        currentAddressCol.className = 'cm-table-column cm-address';
        currentStateCol.className = 'cm-table-column cm-state';
        currentCountryCol.className = 'cm-table-column cm-country';
        currentEditBtn.className = 'cm-table-column cm-edit';
        currentDeleteBtn.className = 'cm-table-column cm-delete';

        currentNameCol.innerHTML = cmsTableKeys[i];
        currentEmailCol.innerHTML = cmsTable[cmsTableKeys[i]].email;
        currentPhoneCol.innerHTML = cmsTable[cmsTableKeys[i]].phone;
        currentAddressCol.innerHTML = cmsTable[cmsTableKeys[i]].address;
        currentStateCol.innerHTML = cmsTable[cmsTableKeys[i]].state;
        currentCountryCol.innerHTML = cmsTable[cmsTableKeys[i]].country;

        currentDeleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        currentEditBtn.innerHTML = '<i class="fas fa-user-edit"></i>';

        currentRow.appendChild(currentNameCol);
        currentRow.appendChild(currentEmailCol);
        currentRow.appendChild(currentPhoneCol);
        currentRow.appendChild(currentAddressCol);
        currentRow.appendChild(currentStateCol);
        currentRow.appendChild(currentCountryCol);
        currentRow.appendChild(currentEditBtn);
        currentRow.appendChild(currentDeleteBtn);
        newTableBody.appendChild(currentRow);
    }

    let enableDisableNewUserModal = (option) => {
        let newPersonName = document.getElementById('newPersonName');
        let newPersonEmail = document.getElementById('newPersonEmail');
        let newPersonPhone = document.getElementById('newPersonPhone');
        let newPersonAddress = document.getElementById('newPersonAddress');
        let newPersonState = document.getElementById('newPersonState');
        let newPersonCountry = document.getElementById('newPersonCountry');
        newPersonName.value = '';
        newPersonEmail.value = '';
        newPersonPhone.value = '';
        newPersonAddress.value = '';
        newPersonState.value = '';
        newPersonCountry.value = '';

        let newPersonModal = document.getElementById('newPersonModal');
        let backdrop = document.getElementById('backdrop');

        newPersonModal.className = `${option}-modal`;
        backdrop.className = `${option}-modal`;
    }
    let addNewEntryBtn = document.getElementById('cmAddNewEntry');
    let editBtns = document.getElementsByClassName('cm-edit');
    let deleteBtns = document.getElementsByClassName('cm-delete');

    let newPersonSubmitBtn = document.getElementById('newPersonSubmitButton');
    let newPersonCancelBtn = document.getElementById('newCancelButton');

    newPersonSubmitBtn.addEventListener('click', () => {
        let newPersonName = document.getElementById('newPersonName').value.trim().toUpperCase();
        let newPersonEmail = document.getElementById('newPersonEmail').value.trim().toUpperCase();
        let newPersonPhone = document.getElementById('newPersonPhone').value.trim().toUpperCase();
        let newPersonAddress = document.getElementById('newPersonAddress').value.trim().toUpperCase();
        let newPersonState = document.getElementById('newPersonState').value.trim().toUpperCase();
        let newPersonCountry = document.getElementById('newPersonCountry').value;
        if(newPersonName === '')
            document.getElementById('newPersonName').className = 'input-err';
        else 
            document.getElementById('newPersonName').className = '';

        if(newPersonEmail === '')
            document.getElementById('newPersonEmail').className = 'input-err'
        else
            document.getElementById('newPersonEmail').className = '';

        if(newPersonPhone === '')
            document.getElementById('newPersonPhone').className = 'input-err';
        else 
            document.getElementById('newPersonPhone').className = '';

        if(newPersonAddress === '')
            document.getElementById('newPersonAddress').className = 'input-err';
        else 
            document.getElementById('newPersonAddress').className = '';
        
        if(newPersonState === '')
            document.getElementById('newPersonState').className = 'input-err';
        else 
            document.getElementById('newPersonState').className = '';

        if(newPersonCountry === '')
            document.getElementById('newPersonCountry').className = 'input-err';
        else 
            document.getElementById('newPersonCountry').className = '';
        
        if(newPersonName !== '' && newPersonAddress !== '' && newPersonPhone !== '' && newPersonEmail !== '' && newPersonState !== '' && newPersonCountry !== ''){
            cmsTable[newPersonName] = {
                'email': newPersonEmail,
                'phone': newPersonPhone,
                'address': newPersonAddress,
                'state': newPersonState,
                'country': newPersonCountry
            }
            localStorage.setItem(tableKey,JSON.stringify(cmsTable));
            enableDisableNewUserModal('disable');
            refreshTable();
        }
    });
    newPersonCancelBtn.addEventListener('click', () =>{
        enableDisableNewUserModal('disable');
    });
    addNewEntryBtn.addEventListener('click', () => {
        enableDisableNewUserModal('enable');
    });

    for(let i = 0; i < editBtns.length; i++){
        editBtns[i].addEventListener('click', ($event) => {
            let nameToEdit = $event.target.parentElement.children[0].innerText;
            let personToEdit = cmsTable[nameToEdit];
            enableDisableNameInput('enable');
            enableDisableNewUserModal('enable');
            let newPersonName = document.getElementById('newPersonName');
            let newPersonEmail = document.getElementById('newPersonEmail');
            let newPersonPhone = document.getElementById('newPersonPhone');
            let newPersonAddress = document.getElementById('newPersonAddress');
            let newPersonState = document.getElementById('newPersonState');
            let newPersonCountry = document.getElementById('newPersonCountry').value;
            newPersonName.value = nameToEdit;
            newPersonEmail.value = personToEdit.email;
            newPersonPhone.value = personToEdit.phone;
            newPersonAddress.value = personToEdit.address;
            newPersonState.value = personToEdit.state;
            newPersonCountry.value = personToEdit.country;
            enableDisableNameInput('enable');
        })
    }
    for(let i = 0; i < deleteBtns.length; i++){
        deleteBtns[i].addEventListener('click', ($event) => {
            let nameToDelete = $event.target.parentElement.children[0].innerText;
            let isSure = window.confirm('Are you sure you want to delete ' + nameToDelete + '?');
            if(isSure)
                // delete user from table
                deleteUserFromTable(nameToDelete);
        })
    }

}

let deleteUserFromTable = (userName) => {
    let tempTable = {};
    let cmsTableKeys = Object.keys(cmsTable);
    for(let i = 0; i < cmsTableKeys.length; i++){
        if(userName !== cmsTableKeys[i]){
            tempTable[cmsTableKeys[i]] = cmsTable[cmsTableKeys[i]]; 
        }
    }
    cmsTable = tempTable;
    localStorage.setItem(tableKey,JSON.stringify(cmsTable));
    refreshTable();
}
let init = () => {
    if(localStorage.getItem(tableKey)){
        cmsTable = JSON.parse(localStorage.getItem(tableKey));
    } else {
        cmsTable = cmsTableDemo;
        localStorage.setItem(tableKey,JSON.stringify(cmsTable));
    }
    refreshTable();
}
init();
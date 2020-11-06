<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://kit.fontawesome.com/9e218809cf.js" crossorigin="anonymous"></script>
    <title>Contacts App</title>
</head>
<body style="background-image: url('img/wall.jpg');">
    <div class="col-md-12" id="nav">
        CONTACT MANAGEMENT
    </div>
    <div class="cm-table-container" id="cmsTableContainer">
        <div class="cm-table-row">
            <div class="cm-table-column cm-name cm-header" id="name">NAME</div>
            <div class="cm-table-column cm-email cm-header" id="mail">E-MAIL</div>
            <div class="cm-table-column cm-phone cm-header" id="phone">PHONE</div>
            <div class="cm-table-column cm-address cm-header" id="address">ADDRESS</div>
            <div class="cm-table-column cm-state cm-header" id="state">STATE</div>
            <div class="cm-table-column cm-country cm-header">COUNTRY</div>
            <div class="cm-table-column cm-header cm-add-entry" id="cmAddNewEntry">+</div>
        </div><br>
        <span id="tableBody"></span>
    </div>
    <div class="disable-modal" id="backdrop"></div>
    <div class="disable-modal" id="newPersonModal">
        <h1>CONTACT DETAILS</h1>
        <label for="newPersonName"><b>NAME</b> :</label>
        <input type="text" id="newPersonName">

        <label for="newPersonEmail"><b>E-MAIL :</b> :</label>
        <input type="text" id="newPersonEmail">

        <label for="newPersonPhone"><b>PHONE NO</b> :</label>
        <input type="text" id="newPersonPhone">

        <label for="newPersonAddress"><b>ADDRESS</b> :</label>
        <input type="text" id="newPersonAddress">

        <label for="newPersonState"><b>STATE</b> :</label>
        <input type="text" id="newPersonState">

        <label for="newPersonCountry"><b>COUNTRY</b> :</label>
        <select id="newPersonCountry">
            <option>Nigeria</option>
            <option>USA</option>
            <option>London</option>
            <option>Portugal</option>
        </select>

        <button id="newCancelButton">CANCEL</button>
        <button id="newPersonSubmitButton">SUBMIT</button>
    </div><br>
    <button id="SortButton" style="position: fixed;">Sort</button>
    <script src="script.js"></script>
</body>
</html>
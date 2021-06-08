let url = {
    id: document.getElementById('urlInput'),
    class: document.getElementsByName('urlInput')
}
let contenttype = {
    JSONContentType: {
        id: document.getElementById('JSONContentType'),
        name: contentType = document.querySelector("[name=ContentType]:checked")
    },
    CustomContentType: {
        id: document.getElementById('CustomContentType'),
        name: contentType = document.querySelector("[name=ContentType]:checked")
    }
}
let method = {
    GetMethod: {
        id: document.getElementById('GetMethod'),
        name: document.querySelector('[name=Method]:checked')
    },
    PostMethod: {
        id: document.getElementById('PostMethod'),
        name: document.getElementsByName('[name=Method]:checked') // this is used to select and read the values of the radio inputs in the radio
    }
}
let jsoninput = {
    whole: document.getElementById('jsoninput'),
    id: document.getElementById('JsonContentInput'),
    name: document.getElementsByName('JsonContentInput')
}
let custominput = {
    whole: document.getElementById('custominput'),
    parameterName: {
        id: document.getElementById('parameterName'),
        name: document.getElementsByName('parameterName')
    },
    parameterContent: {
        id: document.getElementById('parameterContent'),
        name: document.getElementsByName('parameterContent')
    },
    addParameter: document.getElementById('addParameter'),
    CustomInput: document.getElementById('CustomInput')
}
let outputbody = {
    id: document.getElementById('Output'),
    name: document.getElementsByName('Output')
}
let submitbutton = {
    id: document.getElementById('SubmitButton')
}

function printOutput(output) {
    outputbody.id.value = output
}


    function getElementByString(string) {
        let span = document.createElement('span')
        span.innerHTML = string
        return span.firstElementChild
    }

contenttype.JSONContentType.id.addEventListener('click', function () {
    jsoninput.whole.style.display = 'inline'
    custominput.whole.style.display = 'none'
    console.log('JSON INPUT DISPLAYED ')
    console.log('CUSTOM INPUT UN-DISPLAYED')
})

contenttype.CustomContentType.id.addEventListener('click', function () {
    jsoninput.whole.style.display = 'none'
    custominput.whole.style.display = 'flex'
    console.log('JSON INPUT UN-DISPLAYED ')
    console.log('CUSTOM INPUT DISPLAYED')
})

let addedParamCount_Name = 1
let addedParamCount_Content = 1
custominput.addParameter.addEventListener('click', () => {
    let parameterAdd = `
<span>
<input type="text" name="parameterName" id="parameterName${addedParamCount_Name++}" placeholder="Parameter Name">
<input type="text" name="parameterContent" id="parameterContent${addedParamCount_Content++}" placeholder="Parameter Content">
</span>
    `

    let parameters = getElementByString(parameterAdd)
    custominput.CustomInput.appendChild(parameters)
    console.table({
        parameterName: addedParamCount_Name,
        parameterContent: addedParamCount_Content,
        parameterName2: addedParamCount_Content - 1,
        parameterContent2: addedParamCount_Content - 1
    }) // a more organized way to display things
})

submitbutton.id.addEventListener('click', () => {

    let contentType = document.querySelector("[name=ContentType]:checked").value
    let requestType = document.querySelector('[name=Method]:checked').value
    console.log(contentType, requestType)

    let urlLink = url.id.value
    console.log(urlLink)

    if (requestType == "GET") {
        fetch(urlLink).then(response => { return response.text() }).then(
            (data) => {
                outputbody.id.value = data
                console.log('dsad')
            }
        )

    }

    if (requestType == "POST") {
        let data = {}
        for (i = 0; i < addedParamCount_Name - 1; i++) {
            let ParamterNameValue = document.getElementById(`parameterName${i}`).value
            let ParameterContentValue = document.getElementById(`parameterContent${i}`).value

            data[ParamterNameValue] = ParameterContentValue // the data here is an object. after entering the data in the textfields, it would be actaully like this -> data['Paramter_Name'] = Paramter_Content. this syntax is used because the variable read is actaully a string. to read the content specified for other variable named by string.
          
        }
        data = JSON.stringify(data) // the data that would be read in form of JSON. this would convert it into string.

        fetch(urlLink, {
            headers: { 'Content-Type': 'application/json; charset= utf-8' },
            body: data,
            method: 'POST'
        }).then(response => response.text())
            .then((text) => {
                printOutput(text)
            }) // THIS WOULD CARRY OUT THE POST FUNCTION 
    }
























})









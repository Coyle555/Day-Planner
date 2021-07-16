const today = moment();
let userInput = $('input')
let hourContainer = $('#hourSection')
let startTime = 9
let startTimePM = 1
let curHour = parseInt(moment().format('h'))
let allHours = [9,10,11,12,1,2,3,4,5]
let eventCont = $('#container') 
    function makeSections(){
        $("#dayPicked").text(today.format('LL'));
        $("#currentDay").text(today.format('LL'));
        let date = moment($('#dayPicked').text()).locale('fr').format('L');
    }


    for(let i = 9; i <= 12; i++){
        $("#hourSection").append(
            `<div class='col-md-12 pb-2 mb-2 hourSection' data-block='${startTime}'>
                <form class='form-inline m-2 p-2'>
                    <div class='col-xs-12 col-md-2'>
                            <div class='mt-2 p-1'>${startTime} A.M.</div>
                    </div>
                    <div class='col-xs-12 col-md-8'>
                        <input type='text' id = '${startTime}' class='form-control' data-hour='${startTime}' style='width:100%;'placeholder='' minlength='2' maxlength='50'></input>
                    </div>
                    <div class='col-xs-12 col-md-2 pt-1'>
                        <button type='button' class='btn btn-primary create' data-hour='${startTime}'>Add</button>
                        </div>
                    </form>
                    <div class='row p-1 todos' data-hour='${startTime++}'></div>
                </div>`
            );
        }
    for (let j = 1; j <= 5; j++) {
        $("#hourSection").append(
            `<div class='col-md-12 pb-2 mb-2 hourSection' data-block='${startTimePM}'>
                <form class='form-inline m-2 p-2'>
                    <div class='col-xs-12 col-md-2'>
                        <div class='mt-2 p-1'>${startTimePM} P.M.</div>
                    </div>
                    <div class='col-xs-12 col-md-8'>
                        <input type='text' id = '${startTimePM}' class='form-control' data-hour='${startTimePM}' style='width:100%;'placeholder='dgfdgfd' minlength='2' maxlength='50'></input>
                    </div>
                    <div class='col-xs-12 col-md-2 pt-1'>
                        <button type='button' class='btn btn-primary create' data-hour='${startTimePM}'>Add</button>
                        </div>
                    </form>
                    <div class='row p-1 todos' data-hour='${startTimePM++}'></div>
                    </div>`
            )
        }
makeSections()
function addItem(event) {
    event.preventDefault()
    for(let i = 0; i < allHours.length; i++) {
        $('#'+ allHours[i]).append('<li>' + userInput.str() + '</li>')
    }
}

    

    // 1) we need the text
    // 2) we also need to find which hour button was pressed
    // 3) localStorage.setItem('9', textToSave)
        

    
        // we have the value here
    
    //save()



function colorTheWebsite() {
    /* All possible hours
    --9--  gray
    --10-- gray
    --11-- gray
    --12-- <---- Noon is current hour (red)
    --1-- green
    --2-- green
    --3-- green
    --4-- green
    --5-- green
    */ 

    let currHourIndex = allHours.indexOf(curHour)

    // if statements check indexes in array
    // elements at indexes correspond to ids in HTML
    for(let i = 0; i < allHours.length; ++i) {
        $('#'+ allHours[i]).css('color', 'white')
        if ( i < currHourIndex) {
            $('#'+ allHours[i]).css('background-color', 'gray')
        } else if (i == currHourIndex) {
            $('#'+ allHours[i]).css('background-color', 'red')
        } else {
            $('#'+ allHours[i]).css('background-color', 'green')
        }

    }
}


function save() {
    for (let i=0; i < allHours.length; i++) {
        let saved = userInput.innerText
        //localStorage.setItem('tasks', saved)
        console.log('whore' + saved)
        console.log('maybeText' + userInput.text())

    }
}

/*function maybeLoadFromLocalStorage() {
    // 1) load array from local storage
    // 2) set text from every saved element.
    let savedInput = localStorage.getItem('tasks')
    if (savedInput !== null) {
        $('input').attr('placeholder', savedInput.str())
        console.log(savedInput)
    }
}
*/
for (let i = 0; i < allHours.length; i++) {}
hourContainer.on('click','.btn', function(){
    console.log("Hi")
})
colorTheWebsite()
// call maybeLoadFromLocalStorage()


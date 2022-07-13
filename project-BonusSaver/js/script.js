const tempString = `
            </div>
            <ul class="task-box" id="taskBox">
                <li>Test 1</li>
                <li>Test 2</li>
                <li>Test 3</li>
                <li>Test 4</li>
            </ul>
            </div>
`

const addString = `<br>add this string `

function render(){
    console.log('[render]')
    document.querySelector(".screen").innerHTML = tempString
}

function deleteTask (){
    document.querySelector(".screen").innerHTML = ''
}

function writeTask (){
    document.querySelector(".screen").innerHTML = addString
}
render();
BCC = {

}

BCC.playbookChange = function() {
    const checkedButton = document.querySelector('input[name="playbook"]:checked')
    if (checkedButton) {
        const playbookName = checkedButton.value
        const playbookData = document.getElementById(playbookName + "-data").innerHTML
        alert(playbookData)
    }
}
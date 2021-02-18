function getParagraph1()
{
    var inputs = [];
}
for(var i = 1 ; i <=6 ; i++)
{
    inputs.push(document.getElementById("para1_input_box_" + i).Value);
    



}
inputs.join(". ");
document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
document.getElementById("showParagraph2").innerHTML = inputs.join(". ");
document.getElementById("showParagraph3").innerHTML = inputs.join(". ");
document.getElementById("showParagraph4").innerHTML = inputs.join(". ");
document.getElementById("showParagraph5").innerHTML = inputs.join(". ");
document.getElementById("showParagraph6").innerHTML = inputs.join(". ");




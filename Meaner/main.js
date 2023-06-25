console.log("Ready to go ! HELLO");

let b = document.getElementById('1');

if (b !== null)
{
    b.addEventListener('click', function()
    {
        var data;
        var input = document.getElementById("text_box");
        input = input.value.toString();

        let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${input}`;

        async function get_data()
        {
            const response = await fetch(url);
            data = await response.json();

            if(data == null)
            {
                document.getElementById("show_output").innerHTML = "ERROR (Please recheck)";
            }
            else
            {
                console.log(data);
                let l = data[0].meanings[0].definitions.length;
                var result = '';
                for (let i = 0; i < l; i++)
                {
                    result += "<li>" + data[0].meanings[0].definitions[i].definition + "</li>";
                }
                console.log(result);
                document.getElementById("show_output").innerHTML = result;
            }
        }

        get_data();
    });
}



//SELECTION UPDATE
// let selection;
// document.addEventListener("selectionchange",event=>{
//     selection = document.getSelection ? document.getSelection().toString() :  document.selection.createRange().toString();

// });










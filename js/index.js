const sheetId = '352097267';
const apiKey = 'AIzaSyAuD0QEvYNP8UrfUsB4QZG7LGISpK1LQYs';
const range = 'Worksheet!A1:AG500'; // Adjust range as needed

const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('Sheet Data:', data.values);
  })
  .catch(error => console.error('Error fetching data:', error));


const players = [
    {'name': 'Lamar Jackson','position': 'QB','team': 'Ravens','fantasy_points': '430.38','completions': '316','passing_attempts': '474','passing_tds': '4172','passing_yards': '41','int': '4','carries': '139','rushing_yards': '915','rushing_tds': '4','receptions': '0','targets': '0','receiving_yards': '0','receiving_tds': '0','pc': '0','fumbles': '5','return_tds': '0','avg_fppg': '25.3',
    }
];

function buildTable(data){
    let table = document.getElementById("fantasyTable")

    for ( let i = 0; i < data.length; i++){
        let row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].position}</td>
                        <td>${data[i].team}</td>
                        <td>${data[i].fantasy_points}</td>
                        <td>${data[i].completions}</td>
                        <td>${data[i].passing_attempts}</td>
                        <td>${data[i].passing_tds}</td>
                        <td>${data[i].passing_yards}</td>
                        <td>${data[i].int}</td>
                        <td>${data[i].carries}</td>
                        <td>${data[i].rushing_yards}</td>
                        <td>${data[i].rushing_tds}</td>
                        <td>${data[i].receptions}</td>
                        <td>${data[i].targets}</td>
                        <td>${data[i].receiving_yards}</td>
                        <td>${data[i].receiving_tds}</td>
                        <td>${data[i].pc}</td>
                        <td>${data[i].fumbles}</td>
                        <td>${data[i].return_tds}</td>
                        <td>${data[i].avg_fppg}</td>
                   </tr>`
        table.innerHTML += row
    }
}

buildTable(players)



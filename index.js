const schedule = document.querySelector(".schedule");

for (let i = 0; i < 5; i += 1) {
    const elementli = document.createElement('li');
    schedule.append(elementli);
    elementli.className = 'Event';
    elementli.innerHTML = `
    <ul class="eElements">
    <li class="eElement${( i + 1 )}" id="eElementc">
      <div class="eimg"></div>
      <p class="etittle"></p>
      <p class="edescription"></p>
    </li>
   </ul>
   `;
}
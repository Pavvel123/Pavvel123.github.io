// Konfiguracja
    const SEMESTER_START = '2025-09-29'; // poniedziałek
    const SEMESTER_WEEKS = 21;

    // Helpers
    function range(from,to,step=1){const a=[];for(let i=from;i<=to;i+=step)a.push(i);return a}
    function fmtDM(d){
      const day = String(d.getDate());
      const month = String(d.getMonth() + 1).padStart(2, '0');
      return `${day}.${month}`;
    }
    function weekDateRange(week){const start=new Date(SEMESTER_START);start.setDate(start.getDate() + (week-1)*7);const end=new Date(start);end.setDate(end.getDate()+6);return {start,end}}
    function normalizeToStudyDay(date){const d=new Date(date);const dow=d.getDay();if(dow===6){d.setDate(d.getDate()+2);return d}if(dow===0){d.setDate(d.getDate()+1);return d}return d}
    function weekNumberForDate(date){const start=new Date(SEMESTER_START);const d=new Date(date.getFullYear(),date.getMonth(),date.getDate());const diffMs=d-new Date(start.getFullYear(),start.getMonth(),start.getDate());const diffDays=Math.floor(diffMs/(1000*60*60*24));let week=Math.floor(diffDays/7)+1;if(week<1)week=1;if(week>SEMESTER_WEEKS)week=SEMESTER_WEEKS;return week}

    const EVENTS=[
        //backgrounds
      {id:'XBG',title:'Obowiązuje plan z wtorku!',day:3,start:'07:30',end:'22:00',place:'',teacher:'',color:'#007413ff',weeks:[7]},
      {id:'XBG',title:'Obowiązuje plan z wtorku!',day:4,start:'07:30',end:'22:00',place:'',teacher:'',color:'#007413ff',weeks:[15]},


      {id:'PG',title:'Projekt grupowy I',day:1,start:'09:15',end:'11:00',place:'AUD.NOV',teacher:'dr inż. Sławomir Gajewski',color:'#ffa672ff',weeks:[2,3,4,5,6,7,8,9,10,11,12,15,16,17,18]},
      {id:'IO',title:'Inżynieria oprogramowania',day:1,start:'11:15',end:'13:00',place:'NE AUD1P',teacher:'dr inż. Aleksander Jarzębowicz',color:'#7274ffff',weeks:[2,3,4,5,6,7,8,9,10,11,12,15,16,17,18]},
      {id:'ASW',title:'Aplikacje systemów wbudowanych',day:1,start:'13:15',end:'15:00',place:'NE AUD1P',teacher:'dr inż. Krzysztof Bikonis',color:'#7274ffff',weeks:[2,3,4,5,6,7,8,9,10,11,12,15,16,17,18]},
      {id:'HD',title:'Hurtownie danych',day:1,start:'17:15',end:'19:00',place:'Zajęcia zdalne',teacher:'dr inż. Teresa Zawadzka',color:'#7274ffff',weeks:[2,3,4,5,6,7,8,9]},

      {id:'SKL',title:'Sieci komputerowe - laboratorium',day:2,start:'11:15',end:'13:00',place:'EA 204',teacher:'mgr inż. Jakub Grochowski',color:'#b472ffff',weeks:[2,4,6,8,10,12,16,18]},
      {id:'AUI',title:'Architektury usług internetowych',day:2,start:'11:15',end:'13:00',place:'WP 111',teacher:'mgr Anna Domagalska',color:'#b472ffff',weeks:[3,5,9,11,17]},
      {id:'ASW',title:'Aplikacje systemów wbudowanych',day:2,start:'13:15',end:'15:00',place:'EA 438',teacher:'dr inż. Krzysztof Bikonis',color:'#b472ffff',weeks:[2,3,4,5,6,8,9,10,11,12,16,17,18]},
      {id:'BE',title:'Biznes elektroniczny',day:2,start:'15:15',end:'17:00',place:'NE AUD1L',teacher:'dr inż. Andrzej Sobecki',color:'#7274ffff',weeks:[2,3,4,5,6,8,9]},
      {id:'BE',title:'Biznes elektroniczny',day:2,start:'17:15',end:'19:00',place:'WP 121',teacher:'dr inż. Andrzej Sobecki',color:'#ffa672ff',weeks:[2,4,6,8,10,12,16,18]},

      {id:'WI',title:'Wizualizacja informacji',day:3,start:'08:15',end:'10:00',place:'EA 401',teacher:'mgr inż. Jerzy Redlarski',color:'#ffa672ff',weeks:[10,11,12,15,16,17,18]},
      {id:'JA',title:'Język angielski IV',day:3,start:'11:15',end:'13:00',place:'Gmach B 313',teacher:'mgr Ewa Rogala',color:'#ff2bedff',weeks:[1,2,3,4,5,6,8,9,10,11,12,15,16,17,18]},
      {id:'SAI',title:'Społeczne aspekty informatyki',day:3,start:'13:15',end:'15:00',place:'NE AUD1P',teacher:'dr inż. Jakub Miler',color:'#7274ffff',weeks:[1,2,3,4,5,6,8,9]},
      {id:'SIP',title:'Systemy informacji przestrzennej',day:3,start:'13:15',end:'15:00',place:'EA 643',teacher:'dr hab. Zbigniew Łubniewski',color:'#b472ffff',weeks:[10,11,12,15,16,17,18]},
      {id:'SIP',title:'Systemy informacji przestrzennej',day:3,start:'15:15',end:'17:00',place:'NE AUD1L',teacher:'dr hab. Marcin Kulawiak',color:'#7274ffff',weeks:[1,2,3,4,5,6,8,9]},
      {id:'HD',title:'Hurtownie danych',day:3,start:'17:15',end:'19:00',place:'EA AUD2',teacher:'dr inż. Teresa Zawadzka',color:'#7274ffff',weeks:[1]},
      {id:'PG',title:'Projekt grupowy I',day:3,start:'19:15',end:'21:00',place:'NE 205',teacher:'dr inż. Krzysztof Gierłowski',color:'#ffa672ff',weeks:[1,2,3,4,5,6,8,9,10,11,12,15,16,17,18]},

      {id:'SAI',title:'Społeczne aspekty informatyki',day:4,start:'08:15',end:'11:00',place:'NE 209',teacher:'dr inż. Jakub Miler',color:'#ffa672ff',weeks:[1,4,7,10,16]},
      {id:'WI',title:'Wizualizacja informacji',day:4,start:'11:15',end:'13:00',place:'EA AUD2',teacher:'dr inż. Jacek Lebiedź',color:'#7274ffff',weeks:[1,2,3,4,5,6,7,8]},
      {id:'HD',title:'Hurtownie danych',day:4,start:'13:15',end:'15:00',place:'EA 436',teacher:'mgr inż. Aleksandra Nabożny',color:'#b472ffff',weeks:[1,2,3,4,5,6,7,8,9,10,11,12,16,17,18]},

      {id:'IO',title:'Inżynieria oprogramowania',day:5,start:'11:15',end:'13:00',place:'WP 121',teacher:'dr inż. Maciej Kucharski',color:'#b472ffff',weeks:[1,2,3,4,6,7,8,9,10,11,12,15,16,17,18]},
      {id:'AUI',title:'Architektury usług internetowych',day:5,start:'13:15',end:'15:00',place:'NE AUD1P',teacher:'mgr inż. Michał Wójcik',color:'#7274ffff',weeks:[1,2,3,4,6,7,8,9,10,11,12,15,16,17,18]},

      //special changes
    //   {id:'SKL',title:'Sieci komputerowe - laboratorium',day:3,start:'11:15',end:'13:00',place:'EA 204',teacher:'mgr inż. Jakub Grochowski',color:'#b472ffff',weeks:[]},
      {id:'AUI',title:'Architektury usług internetowych',day:3,start:'11:15',end:'13:00',place:'WP 111',teacher:'mgr Anna Domagalska',color:'#b472ffff',weeks:[7]},
      {id:'ASW',title:'Aplikacje systemów wbudowanych',day:3,start:'13:15',end:'15:00',place:'EA 438',teacher:'dr inż. Krzysztof Bikonis',color:'#b472ffff',weeks:[7]},
      {id:'BE',title:'Biznes elektroniczny',day:3,start:'15:15',end:'17:00',place:'NE AUD1L',teacher:'dr inż. Andrzej Sobecki',color:'#7274ffff',weeks:[7]},
    //   {id:'BE',title:'Biznes elektroniczny',day:3,start:'17:15',end:'19:00',place:'WP 121',teacher:'dr inż. Andrzej Sobecki',color:'#ffa672ff',weeks:[]},

    // {id:'SKL',title:'Sieci komputerowe - laboratorium',day:4,start:'11:15',end:'13:00',place:'EA 204',teacher:'mgr inż. Jakub Grochowski',color:'#b472ffff',weeks:[]},
      {id:'AUI',title:'Architektury usług internetowych',day:4,start:'11:15',end:'13:00',place:'WP 111',teacher:'mgr Anna Domagalska',color:'#b472ffff',weeks:[15]},
      {id:'ASW',title:'Aplikacje systemów wbudowanych',day:4,start:'13:15',end:'15:00',place:'EA 438',teacher:'dr inż. Krzysztof Bikonis',color:'#b472ffff',weeks:[15]},
    //   {id:'BE',title:'Biznes elektroniczny',day:4,start:'17:15',end:'19:00',place:'WP 121',teacher:'dr inż. Andrzej Sobecki',color:'#ffa672ff',weeks:[]},

      //holidays
      {id:'XFR',title:'Dzień Wolny',day:1,start:'07:30',end:'22:00',place:'',teacher:'',color:'#818181ff',weeks:[1]},
      {id:'XFR',title:'Dzień Wolny',day:2,start:'07:30',end:'22:00',place:'',teacher:'',color:'#818181ff',weeks:[1]},
      {id:'XFR',title:'Dzień Wolny',day:5,start:'07:30',end:'22:00',place:'',teacher:'',color:'#818181ff',weeks:[5]},
      {id:'XHL',title:'Święto Niepodległości',day:2,start:'07:30',end:'22:00',place:'',teacher:'',color:'#ff4a4aff',weeks:[7]},
      {id:'XFR',title:'Przerwa Świąteczno-Noworoczna',day:1,start:'07:30',end:'22:00',place:'',teacher:'',color:'#818181ff',weeks:[13,14]},
      {id:'XFR',title:'Przerwa Świąteczno-Noworoczna',day:2,start:'07:30',end:'22:00',place:'',teacher:'',color:'#818181ff',weeks:[13,14]},
      {id:'XHL',title:'Wigilia',day:3,start:'07:30',end:'22:00',place:'',teacher:'',color:'#ff4a4aff',weeks:[13]},
      {id:'XHL',title:'Boże Narodzenie',day:4,start:'07:30',end:'22:00',place:'',teacher:'',color:'#ff4a4aff',weeks:[13]},
      {id:'XHL',title:'Boże Narodzenie',day:5,start:'07:30',end:'22:00',place:'',teacher:'',color:'#ff4a4aff',weeks:[13]},
      {id:'XFR',title:'Sylwester',day:3,start:'07:30',end:'22:00',place:'',teacher:'',color:'#818181ff',weeks:[14]},
      {id:'XHL',title:'Nowy Rok',day:4,start:'07:30',end:'22:00',place:'',teacher:'',color:'#ff4a4aff',weeks:[14]},
      {id:'XHL',title:'Przerwa Świąteczno-Noworoczna',day:5,start:'07:30',end:'22:00',place:'',teacher:'',color:'#818181ff',weeks:[14]},
      {id:'XHL',title:'Święto Objawienia Pańskiego (Trzech Króli)',day:2,start:'07:30',end:'22:00',place:'',teacher:'',color:'#ff4a4aff',weeks:[15]}
    ];
    

    const DAYS=['Poniedziałek','Wtorek','Środa','Czwartek','Piątek'];
    const startHour = 7, endHour = 22, slotHeight = 36, minutesPerSlot = 30;

    // Elementy
    const timetable = document.getElementById('timetable');
    const timesCol = document.getElementById('timesCol');
    const weekSelect = document.getElementById('weekSelect');
    const daySelect = document.getElementById('daySelect');
    const todayBtn = document.getElementById('todayBtn');

    function buildWeekSelect(){ weekSelect.innerHTML=''; for(let w=1; w<=SEMESTER_WEEKS; w++){ const {start,end} = weekDateRange(w); const opt = document.createElement('option'); opt.value = w; opt.textContent = `${w}. (${fmtDM(start)} - ${fmtDM(end)})`; weekSelect.appendChild(opt) } weekSelect.value = 1 }
    function buildDaySelect(){ daySelect.innerHTML=''; for(let i=0;i<DAYS.length;i++){ const opt = document.createElement('option'); opt.value = i+1; opt.textContent = DAYS[i]; daySelect.appendChild(opt) } daySelect.value = 1 }

    // Zbuduj layout i nagłówki dni z datami (na podstawie aktualnie wybranego tygodnia)
    function buildLayout(){
      timesCol.innerHTML = '';
      for(let h=startHour; h<endHour; h++){
        const t1 = document.createElement('div'); t1.className='time-slot'; t1.textContent = `${String(h).padStart(2,'0')}:00`; t1.style.color = 'rgb(220,220,220)';
        const t2 = document.createElement('div'); t2.className='time-slot'; t2.textContent = `${String(h).padStart(2,'0')}:30`; t2.style.color = 'rgb(110,110,110)';
        timesCol.appendChild(t1); timesCol.appendChild(t2);
      }

      // usuń istniejące kolumny
      Array.from(timetable.querySelectorAll('.day-col')).forEach(e=>e.remove());

      const selectedWeek = Number(weekSelect.value) || 1;
      const weekStart = new Date(SEMESTER_START);
      weekStart.setDate(weekStart.getDate() + (selectedWeek-1)*7);

      for(let d=0; d<DAYS.length; d++){
        const col = document.createElement('div'); col.className = 'day-col'; col.dataset.day = (d+1);
        const header = document.createElement('div'); header.className = 'day-header';
        const dayDate = new Date(weekStart); dayDate.setDate(weekStart.getDate() + d);
        header.textContent = `${DAYS[d]} ${fmtDM(dayDate)}`;
        col.appendChild(header);

        const rows = (endHour - startHour) * (60 / minutesPerSlot);
        col.style.minHeight = (rows * slotHeight) + 'px';
        timetable.appendChild(col);
      }

      const isMobile = window.matchMedia('(max-width:760px)').matches;
      timetable.style.gridTemplateColumns = isMobile ? '60px 1fr' : `60px repeat(${DAYS.length},1fr)`;
    }

    function parseTime(t){ const [hh,mm] = t.split(':').map(Number); return hh*60 + mm }
    function minutesToTop(mins){ return ((mins - startHour*60) / minutesPerSlot) * slotHeight }
    function formatWeeks(arr){ if(!arr || !arr.length) return ''; const a = [...new Set(arr)].sort((x,y)=>x-y); const ranges = []; let s=a[0], e=a[0]; for(let i=1;i<a.length;i++){ const c=a[i]; if(c===e+1) e=c; else { ranges.push(s===e?String(s):`${s}-${e}`); s=e=c } } ranges.push(s===e?String(s):`${s}-${e}`); return ranges.join(',') }
    function eventOccursInWeek(ev,w){ if(!ev.weeks) return true; return Array.isArray(ev.weeks) && ev.weeks.indexOf(w)!==-1 }

    function clearRendered(){ const cols = timetable.querySelectorAll('.day-col'); cols.forEach(col=>{ Array.from(col.querySelectorAll('.event')).forEach(e=>e.remove()); Array.from(col.querySelectorAll('.now-line')).forEach(e=>e.remove()); }) }

    function renderEvents(){
      clearRendered();
      const selectedWeek = Number(weekSelect.value);
      const isMobile = window.matchMedia('(max-width:760px)').matches;
      const selectedDayMobile = daySelect ? Number(daySelect.value) : null;

      // ustaw grid odpowiednio do breakpointa
      timetable.style.gridTemplateColumns = isMobile ? '60px 1fr' : `60px repeat(${DAYS.length},1fr)`;

      // pokaż/ukryj kolumny (na mobile pokazujemy tylko wybrany dzień)
      document.querySelectorAll('.day-col').forEach(col=>{
        if(isMobile && selectedDayMobile){ col.style.display = (Number(col.dataset.day) === selectedDayMobile) ? 'block' : 'none'; }
        else { col.style.display = 'block'; }
      });

      for(const ev of EVENTS){
        // filtr po tygodniu
        if(!eventOccursInWeek(ev, selectedWeek)) continue;
        if(isMobile && selectedDayMobile && Number(ev.day) !== selectedDayMobile) continue;

        const dayCol = timetable.querySelector(`.day-col[data-day='${ev.day}']`);
        if(!dayCol) continue;

        // UWAGA: przesuwamy kafelki symulując start/koniec +20 minut
        const start = parseTime(ev.start) + 16; // +16 minut
        const end = parseTime(ev.end) + 23; // +23 minut
        const top = minutesToTop(start);
        const height = Math.max(28, ((end - start) / minutesPerSlot) * slotHeight - 6);

        const el = document.createElement('div');
        el.className = 'event';
        el.style.top = top + 'px';
        el.style.height = height + 'px';
        el.style.background = ev.color || '#60a5fa';
        el.dataset.id = ev.id;

        el.innerHTML = `
          <div class="title">${escapeHtml(ev.title)}</div>
          <div class="meta">${escapeHtml(ev.place || '')}${ev.teacher ? ' • ' + escapeHtml(ev.teacher) : ''}</div>
          <div class="time">${ev.start} — ${ev.end}</div>
          <div class="weeks">Tyg.: ${escapeHtml(formatWeeks(ev.weeks))}</div>
        `;

        dayCol.appendChild(el);
      }

      updateNowLine();
    }

    function escapeHtml(s){ if(!s) return ''; return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;') }

    // Plan na dzisiaj
    function goToToday(){
      const now = new Date();
      const target = normalizeToStudyDay(now);
      const weekNum = weekNumberForDate(target);
      const dow = target.getDay();
      const dayIndex = (dow >= 1 && dow <=5) ? dow : 1;

      weekSelect.value = weekNum;
      if(daySelect) daySelect.value = dayIndex;
      buildLayout();
      renderEvents();
      window.scrollTo({top:0, behavior:'smooth'});
    }

    // linia 'teraz' (pokazywana tylko w bieżącym tygodniu, a na mobile tylko w aktualnym dniu)
    function updateNowLine(){
      // usuń stare
      document.querySelectorAll('.now-line').forEach(n=>n.remove());
      const now = new Date();
      const currentWeek = weekNumberForDate(now);
      const selectedWeek = Number(weekSelect.value);
      if(currentWeek !== selectedWeek) return; // tylko bieżący tydzień

      const minutes = now.getHours()*60 + now.getMinutes();
      if(minutes < startHour*60 || minutes > endHour*60) return; // poza zakresem
      const top = minutesToTop(minutes)+18;

      const isMobile = window.matchMedia('(max-width:760px)').matches;
      const selectedDayMobile = daySelect ? Number(daySelect.value) : null;

      document.querySelectorAll('.day-col').forEach(col => {
        const dayNum = Number(col.dataset.day);
        if(isMobile && selectedDayMobile && dayNum !== selectedDayMobile) return;
        const dow = new Date().getDay(); // 1..5
        if(dayNum !== dow) return; // tylko aktualny dzień
        const line = document.createElement('div');
        line.className = 'now-line';
        line.style.top = top + 'px';
        col.appendChild(line);
      });
    }

    // init
    buildWeekSelect();
    buildDaySelect();
    buildLayout();
    goToToday();

    // listeners
    weekSelect.addEventListener('change', () => { buildLayout(); renderEvents(); });
    daySelect.addEventListener('change', renderEvents);
    todayBtn.addEventListener('click', goToToday);
    window.addEventListener('resize', () => { buildLayout(); requestAnimationFrame(renderEvents); });
    setInterval(updateNowLine, 600);

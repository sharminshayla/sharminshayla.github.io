var dayjs = require('dayjs');

const projects = [{
  "name": "Collabright",
  "hash": "collabright",
  "type": "personal",
  "year": "2021",
  "url": [{
    "title": "Website",
    "url": "https://devpost.com/software/collabright"
  }],
  "description": "Version control and collaboration platform for GIS mapping with integrated e-signature workflow",
  "thumbnail": `<svg viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M250.148 132.385c22.567-.042 42.659-14.311 50.135-35.605 80.736 21.969 136.844 95.178 137.06 178.845.294 7.992 9.13 12.668 15.904 8.418a10.39 10.39 0 0 0 4.859-8.418c-.259-94-63.911-175.995-154.913-199.552-2.399-40.878-48.152-63.832-82.357-41.314-34.202 22.513-31.205 73.61 5.395 91.98a53.212 53.212 0 0 0 23.917 5.646zm0-85.629c24.971 0 40.577 27.027 28.092 48.655-12.487 21.625-43.699 21.625-56.179 0a32.416 32.416 0 0 1-4.352-16.217c0-17.924 14.515-32.46 32.439-32.488zM96.739 324.152a53.07 53.07 0 0 0-23.56-.886c-21.823-81.655 14.494-167.715 88.223-209.045 6.955-3.993 6.973-14.015.039-18.037a10.407 10.407 0 0 0-10.416-.018C68.394 142.807 28.233 239.804 53.712 331.21c-34.165 22.495-31.182 73.541 5.387 91.887a53.553 53.553 0 0 0 24.041 5.682c40.951.005 66.557-44.318 46.084-79.786a53.169 53.169 0 0 0-32.485-24.841zm17.596 59.789c-6.344 24.152-36.454 32.376-54.196 14.808-15.206-15.052-11.928-40.443 6.604-51.141 21.621-12.485 48.652 3.121 48.652 28.092 0 2.778-.355 5.548-1.06 8.241zm360.326-25.589c-10.679-39.535-60.155-52.673-89.049-23.657-19.556 19.639-20.755 51.003-2.754 72.077-61.294 61.103-156.719 71.643-229.858 25.38-6.758-4.279-15.598.362-15.93 8.344a10.396 10.396 0 0 0 4.824 9.197c82.161 52.012 189.513 39.462 257.462-30.1a52.722 52.722 0 0 0 23.77 5.808c35.047.042 60.571-33.203 51.488-67.049zm-23.301 29.999c-12.506 21.607-43.724 21.575-56.182-.065-12.461-21.636 3.173-48.65 28.14-48.626 14.686.02 27.528 9.901 31.313 24.09a32.51 32.51 0 0 1-3.271 24.601z" style="fill:#1890ff;stroke:#1890ff;stroke-width:3.21373px" fill="#52abfa"/></svg>`,
  "color": "#1890ff",
  "winner": [{
    "title": "First Place - Jane Goodall Institute App",
    "platform": "DocuSign Good Code Hackathon",
    "url": "https://docusign2021.devpost.com/"
  }],
  "tags": ["esri", "arcgis", "docusign", "react", "django", "celery", "redis", "postgresql", "heroku"]
}];

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

const getProjects = () => {
  let sectionInnerHTML = '';
  const projectsToDisplay = projects.filter(project => project.type === 'personal' && project.winner);
  projectsToDisplay.forEach(project => {
    const rgb = hexToRgb(project.color || '#ffffff');
    sectionInnerHTML += `
            <div id="${project.hash}" class="col-lg-6 col-xs-12 d-flex">
                <article class="mb-4 p-4 flex-fill section-card">
                    <header class="mb-3 d-flex">
                        <div class="mr-2 p-1 rounded placeholder" style="background: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.33);">
                          ${project.thumbnail}
                        </div>
                        
                        <div>
                          <h3>
                              <a href="${project.url[0].url}" target="_blank" rel="noopener" title="${project.url[0].title}">
                                  ${project.name}
                              </a>
                          </h3>
                          <time>${project.year}</time>
                        </div>
                    </header>
                    <div class="my-1">
                        ${project.winner ? project.winner.map(win => `
                            <div>
                                <i aria-hidden="true" class="fa fa-trophy"></i>
                                <span> <a href="${win.url}">${win.platform}</a></span>
                            </div>
                        `).join('') : ''}
                    </div>
                    <p class="my-2">
                        ${project.description}
                    </p>
                    <footer class="mt-3">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
                    </footer>
                </article>
            </div>
  `;
  });
  return sectionInnerHTML;
}

const works = [
  
];

const getWorks = () => {
  let innerHtml = '';

  works.forEach(work => {
    const startDate = dayjs(work.startDate, 'YYYY-MM-DD');
    const endDate = work.endDate ? dayjs(work.endDate, 'YYYY-MM-DD') : dayjs();
    const formattedStartDate = startDate.format('MMM YYYY');
    const formattedEndDate = endDate.format('MMM YYYY');
    const tenureStr = work.endDate ? `${formattedStartDate} to ${formattedEndDate}` : `Since ${formattedStartDate}`;

    const rgb = hexToRgb(work.color || '#ffffff');

    innerHtml += `
      <div class="col-12 d-flex">
        <article class="mb-4 p-4 flex-fill section-card">
            <header class="mb-3 d-flex">
                <div class="mr-2 p-1 rounded placeholder" style="background: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.33);">
                  ${work.thumbnail}
                </div>
                <div>
                  <h3>
                      ${work.title} at <a href="${work.companyWebsite}" target="_blank" rel="noopener noreferrer">${work.companyName}</a>
                  </h3>
                  <address>${work.location}</address>
                  <time class="tenure" data-start="${work.startDate}" ${work.endDate && `data-end="${work.endDate}"`}>${tenureStr}</time>
                </div>
            </header>
            <div class="my-2">
                <p>${work.excerptHTML}</p>
                <details>
                    <summary class="mb-3">Learn More</summary>
                    <ul>
                      ${work.responsibilityHTMLs.map(responsibility => `<li>${responsibility}</li>`).join('')}
                    </ul>
                </details>
            </div>
            <footer class="mt-3">
              ${work.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
            </footer>
        </article>
    </div>
    `
  });
  return innerHtml;
}

const getAnalyticsService = () => {
  if (process.env.NODE_ENV !== 'production') return '';

  return `
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-106861471-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-106861471-1');
    </script>
  `
}

module.exports = {
  getAnalyticsService,
  getProjects,
  getWorks
}

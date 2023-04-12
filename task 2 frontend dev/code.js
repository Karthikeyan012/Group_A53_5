const form = document.querySelector('form');
const jobsList = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const keywords = form.elements.keywords.value;
  const location = form.elements.location.value;

  fetch(`https://jobs.api.com/search?keywords=${keywords}&location=${location}`)
    .then(response => response.json())
    .then(data => {
      jobsList.innerHTML = '';

      data.forEach(job => {
        const jobItem = `
          <li>
            <h4>${job.title}</h4>
            <p>${job.company}</p>
            <p>${job.location}</p>
            <a href="${job.applyUrl}">Apply Now</a>
          </li>
        `;
        jobsList.innerHTML += jobItem;
      });
    })
    .catch(error => {
      console.error(error);
      jobsList.innerHTML = '<li>No jobs found.</li>';
    });
});

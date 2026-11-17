const eventsData = [
    {
        id: 1,
        title: "AI & Machine Learning Bootcamp",
        category: "workshop",
        date: "March 25, 2026",
        time: "10:00 AM - 4:00 PM",
        location: "Tech Lab 3",
        description: "Hands-on workshop covering neural networks, Python, and TensorFlow fundamentals for beginners."
    },
    {
        id: 2,
        title: "Annual TechFest Hackathon 2026",
        category: "event",
        date: "April 5-6, 2026",
        time: "24 Hours Live",
        location: "Main Auditorium",
        description: "Build innovative software solutions, compete with teams across colleges, and win exciting cash prizes."
    },
    {
        id: 3,
        title: "Cybersecurity & Ethical Hacking",
        category: "seminar",
        date: "April 12, 2026",
        time: "11:30 AM - 1:30 PM",
        location: "Seminar Hall B",
        description: "Guest lecture by industry security experts on modern threat landscapes and career paths in cybersecurity."
    },
    {
        id: 4,
        title: "Web Development with React & Node",
        category: "workshop",
        date: "April 20, 2026",
        time: "09:00 AM - 3:00 PM",
        location: "Computer Center 1",
        description: "Learn full-stack web development by building a fully functional modern web application from scratch."
    },
    {
        id: 5,
        title: "Entrepreneurship & Startup Pitch",
        category: "seminar",
        date: "May 2, 2026",
        time: "02:00 PM - 5:00 PM",
        location: "Management Block",
        description: "Pitch your startup ideas to angel investors and successful alumni founders in an interactive session."
    },
    {
        id: 6,
        title: "Inter-College Cultural Fest",
        category: "event",
        date: "May 15, 2026",
        time: "10:00 AM Onwards",
        location: "College Open Air Theatre",
        description: "A grand celebration of music, dance, drama, and fine arts featuring participants from all over the region."
    }
];

const eventsGrid = document.getElementById('eventsGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.tab-btn');

function renderEvents(items) {
    if (items.length === 0) {
        eventsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No events found matching your criteria.</p>`;
        return;
    }

    eventsGrid.innerHTML = items.map(event => `
        <div class="event-card">
            <div class="event-header">
                <span class="badge ${event.category}">${event.category}</span>
                <span class="event-date"><i class="fa-regular fa-calendar"></i> ${event.date}</span>
            </div>
            <div class="event-body">
                <h3 class="event-title">${event.title}</h3>
                <p class="event-desc">${event.description}</p>
                <div class="event-meta">
                    <i class="fa-solid fa-location-dot"></i> ${event.location} &bull; <i class="fa-regular fa-clock"></i> ${event.time}
                </div>
                <button class="btn-register" onclick="alert('Successfully registered for ${event.title}!')">Register Now</button>
            </div>
        </div>
    `).join('');
}

// Initial Render
renderEvents(eventsData);

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        if (filter === 'all') {
            renderEvents(eventsData);
        } else {
            const filtered = eventsData.filter(e => e.category === filter);
            renderEvents(filtered);
        }
    });
});

// Search functionality
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = eventsData.filter(event =>
        event.title.toLowerCase().includes(term) ||
        event.description.toLowerCase().includes(term) ||
        event.location.toLowerCase().includes(term)
    );
    renderEvents(filtered);
});
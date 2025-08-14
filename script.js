const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const resultsSection = document.getElementById('results-section');

const recommendations = {
    beach: [
        {
            name: 'Bondi Beach',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
            desc: 'A world-famous beach in Sydney, Australia.'
        },
        {
            name: 'Waikiki Beach',
            image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
            desc: 'A beautiful beach in Honolulu, Hawaii.'
        }
    ],
    temple: [
        {
            name: 'Angkor Wat',
            image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80',
            desc: 'A magnificent temple complex in Cambodia.'
        },
        {
            name: 'Kinkaku-ji',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
            desc: 'The Golden Pavilion in Kyoto, Japan.'
        }
    ],
    country: [
        {
            name: 'Italy',
            image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
            desc: 'Famous for its art, food, and history.'
        },
        {
            name: 'Japan',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
            desc: 'A country of tradition and technology.'
        }
    ]
};

function showResults(type) {
    const items = recommendations[type];
    if (!items) return;
    resultsSection.innerHTML = `<h2>Recommended ${type === 'country' ? 'Countries' : type.charAt(0).toUpperCase() + type.slice(1) + 's'}</h2>` +
        '<div class="results-list">' +
        items.map(item => `
            <div class="result-item">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
            </div>
        `).join('') +
        '</div>';
}

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();
    resultsSection.innerHTML = '';
    if (!query) {
        alert('Please enter a destination or keyword.');
        return;
    }
    if (query.includes('beach')) {
        showResults('beach');
    } else if (query.includes('temple')) {
        showResults('temple');
    } else if (query.includes('country')) {
        showResults('country');
    } else {
        resultsSection.innerHTML = '<p>No recommendations found for your search. Try "beach", "temple", or "country".</p>';
    }
});

clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    resultsSection.innerHTML = '';
});

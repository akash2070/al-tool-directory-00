// State management
let filteredTools = [...toolsData];
let searchTerm = '';
let selectedCategory = '';
let selectedPricing = '';

// DOM elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const pricingFilter = document.getElementById('pricingFilter');
const toolsGrid = document.getElementById('toolsGrid');
const resultsCount = document.getElementById('resultsCount');
const themeToggle = document.getElementById('themeToggle');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    renderTools();
    setupEventListeners();
    updateResultsCount();
});

// Theme management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark', savedTheme === 'dark');
    updateThemeIcon();
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    const isDark = document.body.classList.contains('dark');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

// Event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    categoryFilter.addEventListener('change', handleCategoryFilter);
    pricingFilter.addEventListener('change', handlePricingFilter);
    themeToggle.addEventListener('click', toggleTheme);
}

// Search functionality
function handleSearch(e) {
    searchTerm = e.target.value.toLowerCase();
    filterAndRenderTools();
}

function handleCategoryFilter(e) {
    selectedCategory = e.target.value;
    filterAndRenderTools();
}

function handlePricingFilter(e) {
    selectedPricing = e.target.value;
    filterAndRenderTools();
}

function filterAndRenderTools() {
    filteredTools = toolsData.filter(tool => {
        const matchesSearch = !searchTerm || 
            tool.name.toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm) ||
            tool.category.toLowerCase().includes(searchTerm);
        
        const matchesCategory = !selectedCategory || tool.category === selectedCategory;
        const matchesPricing = !selectedPricing || tool.pricing === selectedPricing;
        
        return matchesSearch && matchesCategory && matchesPricing;
    });
    
    renderTools();
    updateResultsCount();
}

// Render tools
function renderTools() {
    if (filteredTools.length === 0) {
        toolsGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No tools found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }
    
    toolsGrid.innerHTML = filteredTools.map(tool => createToolCard(tool)).join('');
}

function createToolCard(tool) {
    const categoryDisplay = getCategoryDisplayName(tool.category);
    const pricingDisplay = getPricingDisplayName(tool.pricing);
    
    return `
        <div class="tool-card">
            <div class="tool-header">
                <div class="tool-logo">
                    <img src="${tool.logo}" 
                         alt="${tool.name} logo" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <div style="display:none; width:100%; height:100%; background:#f3f4f6; align-items:center; justify-content:center; font-size:12px; color:#6b7280;">
                        ${tool.name.charAt(0)}
                    </div>
                </div>
                <div class="tool-info">
                    <h3>${tool.name}</h3>
                    <span class="tool-category">${categoryDisplay}</span>
                </div>
            </div>
            
            <p class="tool-description">${tool.description}</p>
            
            <div class="tool-footer">
                <span class="tool-pricing">${pricingDisplay}</span>
                <a href="${tool.website}" target="_blank" rel="noopener noreferrer" class="tool-link">
                    Visit Site
                </a>
            </div>
        </div>
    `;
}

// Utility functions
function getCategoryDisplayName(category) {
    const categories = {
        'writing': 'Writing',
        'development': 'Development',
        'design': 'Design',
        'video': 'Video',
        'audio': 'Audio',
        'productivity': 'Productivity',
        'marketing': 'Marketing',
        'research': 'Research',
        'chatbots': 'Chatbots',
        'image': 'Image',
        'automation': 'Automation',
        'analytics': 'Analytics'
    };
    return categories[category] || category;
}

function getPricingDisplayName(pricing) {
    const pricings = {
        'free': 'Free',
        'freemium': 'Freemium',
        'paid': 'Paid'
    };
    return pricings[pricing] || pricing;
}

function updateResultsCount() {
    const count = filteredTools.length;
    const total = toolsData.length;
    resultsCount.textContent = `${count} of ${total} tools found`;
}

// Google Analytics (if measurement ID is provided)
function initGA() {
    if (typeof gtag === 'undefined') return;
    
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX'); // Replace with actual measurement ID
}

// Track events
function trackEvent(action, category, label) {
    if (typeof gtag === 'undefined') return;
    
    gtag('event', action, {
        event_category: category,
        event_label: label
    });
}

// Track tool visits
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('tool-link')) {
        const toolName = e.target.closest('.tool-card').querySelector('h3').textContent;
        trackEvent('tool_visit', 'engagement', toolName);
    }
});

// Track search usage
searchInput.addEventListener('input', function() {
    if (this.value.length > 2) {
        trackEvent('search', 'engagement', this.value);
    }
});

// Track filter usage
categoryFilter.addEventListener('change', function() {
    if (this.value) {
        trackEvent('filter_category', 'engagement', this.value);
    }
});

pricingFilter.addEventListener('change', function() {
    if (this.value) {
        trackEvent('filter_pricing', 'engagement', this.value);
    }
});

// Initialize Google Analytics if available
if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    // Only load analytics on production
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    script.async = true;
    document.head.appendChild(script);
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    
    setTimeout(initGA, 100);
}
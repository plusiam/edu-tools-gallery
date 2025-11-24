// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
    initializeNavigation();
    initializeSearch();
    initializeScrollTop();
});

// Initialize gallery with dynamic rendering
function initializeGallery() {
    renderToolCards();
    updateCategoryCounts();
    initializeCategoryFilter();
}

// Render tool cards dynamically
function renderToolCards() {
    const sections = document.querySelectorAll('.category-section');
    
    sections.forEach(section => {
        const category = section.dataset.category;
        const grid = section.querySelector('.cards-grid');
        
        if (!grid) return;
        
        // Filter tools by category
        const tools = toolsData.filter(tool => tool.category === category);
        
        // Generate HTML for cards
        grid.innerHTML = tools.map(tool => `
            <a href="${tool.url}" target="_blank" class="tool-card">
                <div class="tool-header">
                    <div class="tool-emoji">${tool.emoji}</div>
                    <div class="tool-info">
                        <h3>${tool.title}</h3>
                    </div>
                </div>
                <p class="tool-desc">${tool.description}</p>
                <div class="tool-footer">
                    <span class="visit-btn">바로가기 →</span>
                </div>
            </a>
        `).join('');
    });
}

// Update category counts
function updateCategoryCounts() {
    const categoryCounts = {};
    
    // Count tools per category
    toolsData.forEach(tool => {
        categoryCounts[tool.category] = (categoryCounts[tool.category] || 0) + 1;
    });
    
    // Update nav buttons
    document.querySelectorAll('.cat-btn').forEach(btn => {
        const category = btn.dataset.category;
        const countSpan = btn.querySelector('.count');
        
        if (category === 'all') {
            countSpan.textContent = toolsData.length;
        } else if (categoryCounts[category]) {
            countSpan.textContent = categoryCounts[category];
        }
    });
    
    // Update section counts
    document.querySelectorAll('.category-section').forEach(section => {
        const category = section.dataset.category;
        const countSpan = section.querySelector('.section-count');
        
        if (countSpan && categoryCounts[category]) {
            countSpan.textContent = `${categoryCounts[category]}개`;
        }
    });
}

// Category filtering
function initializeCategoryFilter() {
    const categoryBtns = document.querySelectorAll('.cat-btn');
    const sections = document.querySelectorAll('.category-section');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedCategory = btn.dataset.category;
            
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show/hide sections
            sections.forEach(section => {
                if (selectedCategory === 'all') {
                    section.style.display = 'block';
                } else {
                    section.style.display = 
                        section.dataset.category === selectedCategory ? 'block' : 'none';
                }
            });
        });
    });
}

// Page navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.dataset.page;
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Show target page
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === targetPage) {
                    page.classList.add('active');
                }
            });
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.tool-card');
        const sections = document.querySelectorAll('.category-section');
        
        if (!query) {
            // Show all cards and sections
            cards.forEach(card => card.style.display = 'flex');
            sections.forEach(section => section.style.display = 'block');
            return;
        }
        
        // Filter cards
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('.tool-desc').textContent.toLowerCase();
            const matches = title.includes(query) || desc.includes(query);
            
            card.style.display = matches ? 'flex' : 'none';
        });
        
        // Hide empty sections
        sections.forEach(section => {
            const visibleCards = section.querySelectorAll('.tool-card[style*="display: flex"]');
            section.style.display = visibleCards.length > 0 ? 'block' : 'none';
        });
    });
}

// Scroll to top button
function initializeScrollTop() {
    const scrollBtn = document.getElementById('scrollTop');
    
    if (!scrollBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

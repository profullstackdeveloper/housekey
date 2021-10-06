import { Menu } from './menu.model';

export const horizontalMenuItems = [ 
    new Menu (1, 'NAV.HOME', '/', null, null, false, 0),
    new Menu (2, 'NAV.PROPERTIES', '/properties', null, null, false, 0), 
    new Menu (40, 'NAV.PAGES', null, null, null, true, 0),
    new Menu (41, 'NAV.AGENTS', '/agents', null, null, false, 40), 
    new Menu (42, 'NAV.AGENT', '/agents/1', null, null, false, 40),
    new Menu (43, 'LOGIN', '/login', null, null, false, 40), 
    new Menu (44, 'REGISTER', '/register', null, null, false, 40), 
    new Menu (45, 'FAQs', '/faq', null, null, false, 40),
    new Menu (46, 'NAV.PRICING', '/pricing', null, null, false, 40), 
    new Menu (47, 'NAV.TERMS_CONDITIONS', '/terms-conditions', null, null, false, 40), 
    new Menu (48, 'Landing', '/landing', null, null, false, 40),  
    new Menu (50, '404 Page', '/404', null, null, false, 40),  
    new Menu (60, 'NAV.CONTACT', '/contact', null, null, false, 0),  
    new Menu (70, 'NAV.ABOUT_US', '/about', null, null, false, 0),   
    new Menu (140, 'Others', null, null, null, true, 40),
    new Menu (141, 'NAV.EXTERNAL_LINK', null, 'http://themeseason.com', '_blank', false, 140), 
    new Menu (142, 'Menu item', null, 'http://themeseason.com', '_blank', false, 140),
    new Menu (143, 'Menu item', null,'http://themeseason.com', '_blank', false, 140),
    new Menu (144, 'Menu item', null,'http://themeseason.com', '_blank', false, 140)    
]

export const verticalMenuItems = [ 
    new Menu (1, 'NAV.HOME', '/', null, null, false, 0), 
    new Menu (2, 'NAV.PROPERTIES', '/properties', null, null, false, 0), 
    new Menu (40, 'NAV.PAGES', null, null, null, true, 0),
    new Menu (41, 'NAV.AGENTS', '/agents', null, null, false, 40), 
    new Menu (42, 'NAV.AGENT', '/agents/1', null, null, false, 40),
    new Menu (43, 'LOGIN', '/login', null, null, false, 40), 
    new Menu (44, 'REGISTER', '/register', null, null, false, 40),   
    new Menu (45, 'FAQs', '/faq', null, null, false, 40),
    new Menu (46, 'NAV.PRICING', '/pricing', null, null, false, 40), 
    new Menu (47, 'NAV.TERMS_CONDITIONS', '/terms-conditions', null, null, false, 40),  
    new Menu (48, 'Landing', '/landing', null, null, false, 40), 
    new Menu (50, '404 Page', '/404', null, null, false, 40),
    new Menu (60, 'NAV.CONTACT', '/contact', null, null, false, 0),  
    new Menu (70, 'NAV.ABOUT_US', '/about', null, null, false, 0),    
    new Menu (140, 'Level 1', null, null, null, true, 0),
    new Menu (141, 'Level 2', null, null, null, true, 140),
    new Menu (142, 'Level 3', null, null, null, true, 141),
    new Menu (143, 'Level 4', null, null, null, true, 142),
    new Menu (144, 'Level 5', null, 'http://themeseason.com', null, false, 143),
    new Menu (200, 'NAV.EXTERNAL_LINK', null, 'http://themeseason.com', '_blank', false, 0)
]
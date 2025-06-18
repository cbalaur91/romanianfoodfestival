# Hero Section Redesign Tasks

## Current Issue
- Slideshow background distracts from the main title
- Client wants something more representative but less distracting

## Option 2: Traditional Pattern Background with Enhanced Typography
**Status**: Ready for implementation
**Priority**: High (implement first)

### Design Details
- Replace slideshow with Romanian traditional textile/embroidery pattern as subtle background
- Make title significantly larger and more prominent with Romanian flag colors  
- Add decorative borders/frames around key information
- Food imagery moved to small decorative elements or icons
- Background pattern should be subtle enough not to compete with text

### Implementation Tasks
1. **Remove slideshow functionality**
   - Remove useState for currentImageIndex
   - Remove useEffect interval timer
   - Remove image mapping and transitions
   - Remove image indicators

2. **Create traditional pattern background**
   - Research Romanian traditional patterns (geometric, floral)
   - Implement as CSS pattern or SVG background
   - Ensure pattern is subtle and doesn't interfere with text readability
   - Use Romanian flag colors in pattern

3. **Enhanced typography**
   - Increase title font size significantly
   - Apply Romanian flag colors to different parts of title
   - Add text shadows or outlines for better contrast
   - Consider custom fonts that reflect Romanian culture

4. **Decorative elements**
   - Add traditional Romanian decorative borders around event details
   - Replace food images with small Romanian cultural icons
   - Frame the main content area with traditional motifs

5. **Responsiveness testing**
   - Ensure pattern scales properly on mobile
   - Test typography hierarchy on different screen sizes
   - Verify decorative elements don't break layout

## Option 3: Split Layout with Static Hero Image  
**Status**: Ready for implementation after Option 2
**Priority**: Medium (implement second)

### Design Details
- Divide hero into two sections: left side with single representative food image, right side with large prominent title
- Remove slideshow completely
- Use Romanian flag colors as accent elements
- Clean, modern layout that puts text first while keeping visual appeal

### Implementation Tasks
1. **Remove slideshow functionality** (same as Option 2)

2. **Create split layout structure**
   - Left column: Single hero food image (choose best from current set)
   - Right column: Title, description, event details, CTA buttons
   - Responsive breakpoints for stacked mobile layout

3. **Enhanced typography for split layout**
   - Even larger title since it has dedicated space
   - Better hierarchy between title, subtitle, and description
   - Romanian flag color accents

4. **Static hero image selection**
   - Choose most representative food image from current set
   - Optimize image for fixed display
   - Apply subtle overlays or filters if needed

5. **Layout refinements**
   - Perfect spacing and alignment
   - Add Romanian flag color accents as dividers or backgrounds
   - Ensure visual balance between image and text sides

6. **Responsiveness for split layout**
   - Stack vertically on mobile
   - Adjust image aspect ratios
   - Maintain visual hierarchy

## Romanian Visual Elements to Incorporate
- **Colors**: Blue (0, 43, 127), Yellow (252, 209, 22), Red (206, 17, 38)
- **Patterns**: Traditional Romanian geometric patterns, floral motifs
- **Typography**: Bold, prominent titles that command attention
- **Cultural Icons**: Romanian Orthodox symbols, traditional decorative elements

## Success Criteria
- Title is immediately prominent and eye-catching
- Background doesn't compete with text for attention
- Maintains Romanian cultural representation
- Responsive across all devices
- Faster loading (no slideshow transitions)
- Clean, professional appearance
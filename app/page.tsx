import Link from "next/link";
import './css/welcome.css'
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10">
      <h1 className="title pb-5">Welcome to Learn CSS!</h1>
      <p className="pb-2">This course simplifies the core concepts of CSS into easy-to-understand lessons. Throughout the upcoming modules, you will explore how CSS functions and how to apply it effectively in your projects.</p>
      <p className="pb-2">You will dive into key CSS topics such as the <i>box model,</i> <i>cascade,</i> <i>specificity,</i> <i>flexbox,</i> <i>grid,</i> and <i>z-index</i>. Additionally, you will discover color <i>formats,</i> <i>gradients,</i> <i>logical properties,</i> and <i>inheritance,</i> helping you become a well-rounded front-end developer prepared for any UI challenge.</p>
      <p className="pb-5">This course caters to both beginners and experienced CSS users. You can progress through the lessons sequentially for a complete understanding of CSS or use it as a quick reference for specific styling techniques. If you are new to web development, check out <b>Learn HTML</b> to understand how to write markup and connect your stylesheets.</p>
      <p className="pb-5">Here is what you will cover:</p>

      <Link href="#" className="text-xl underline">Box Model</Link>
      <p className="pt-2 pb-5">Since everything rendered by CSS is a box, grasping the CSS Box Model is a fundamental skill for mastering CSS.</p>

      <Link href="#" className="text-xl underline">Selectors</Link>
      <p className="pt-2 pb-5">Applying CSS to elements requires selecting them first. CSS provides various methods to accomplish this, all of which you will explore in this module.</p>

      <Link href="#" className="text-xl underline">The Cascade</Link>
      <p className="pt-2 pb-5">When multiple CSS rules apply to an element, the browser decides which one takes priority. Learn how this decision is made and how to control it.</p>

      <Link href="#" className="text-xl underline">Specificity</Link>
      <p className="pt-2 pb-5">This section delves into specificity, an essential component of the cascade that determines which styles are applied.</p>

      <Link href="#" className="text-xl underline">Inheritance</Link>
      <p className="pt-2 pb-5">Certain CSS properties automatically inherit values unless specified otherwise. This module explains how inheritance works and how to leverage it effectively.</p>

      <Link href="#" className="text-xl underline">Color</Link>
      <p className="pt-2 pb-5">CSS provides multiple ways to define colors. Here, you will explore the most commonly used color values and how to use them.</p>

      <Link href="#" className="text-xl underline">Sizing Units</Link>
      <p className="pt-2 pb-5">Understanding how to size elements is crucial when working with the dynamic nature of the web. Learn the different sizing methods available in CSS.</p>

      <Link href="#" className="text-xl underline">Layout</Link>
      <p className="pt-2 pb-5">Discover the different layout techniques you can use when designing components or structuring a web page.</p>

      <Link href="#" className="text-xl underline">Flexbox</Link>
      <p className="pt-2 pb-5">Flexbox is a powerful tool for arranging elements along a single axis. This module teaches you how to use it effectively.</p>

      <Link href="#" className="text-xl underline">Grid</Link>
      <p className="pt-2 pb-5">CSS Grid allows for precise control over layouts in both rows and columns. Learn how to take advantage of this two-dimensional system.</p>

      <Link href="#" className="text-xl underline">Logical Properties</Link>
      <p className="pt-2 pb-5">Logical properties are flow-relative rather than tied to the physical screen. Understand how they work and why they are useful in modern CSS.</p>

      <Link href="#" className="text-xl underline">Spacing</Link>
      <p className="pt-2 pb-5">Explore different spacing techniques to ensure your layout looks clean and well-structured.</p>

      <Link href="#" className="text-xl underline">Pseudo-elements</Link>
      <p className="pt-2 pb-5">Pseudo-elements let you style or create elements without adding extra HTML. This module shows you how to use them effectively.</p>

      <Link href="#" className="text-xl underline">Pseudo-classes</Link>
      <p className="pt-2 pb-5">Pseudo-classes enable styling elements based on state changes, making designs more interactive based on user input.</p>

      <Link href="#" className="text-xl underline">Borders</Link>
      <p className="pt-2 pb-5">Borders frame elements, and CSS gives you control over their size, style, and color. Learn how to customize them here.</p>

      <Link href="#" className="text-xl underline">Shadows</Link>
      <p className="pt-2 pb-5">CSS offers various methods to create shadows for both text and elements. Learn how to use them for different design effects.</p>

      <Link href="#" className="text-xl underline">Focus</Link>
      <p className="pt-2 pb-5">Managing focus in web applications is crucial for accessibility. This module covers how to handle focus for both mouse and keyboard users.</p>

      <Link href="#" className="text-xl underline">Gradients</Link>
      <p className="pt-2 pb-5">Gradients allow for smooth transitions between colors without using images. Learn how to create and use them in your designs.</p>

      <Link href="#" className="text-xl underline">Animations</Link>
      <p className="pt-2 pb-5">CSS animations enhance user experience by adding motion and interactivity. Discover how to implement them in this section.</p>

      <Link href="#" className="text-xl underline">Filters</Link>
      <p className="pt-2 pb-5">Filters let you apply visual effects to elements directly in CSS. Explore their capabilities and how to use them effectively.</p>

      <Link href="#" className="text-xl underline">Lists</Link>
      <p className="pt-2 pb-5">Lists are composed of a container element with individual items. This module explains how to style all parts of a list properly.</p>

      <Link href="#" className="text-xl underline">Transitions</Link>
      <p className="pt-2 pb-5">CSS transitions allow smooth changes between states. Learn how to use them to enhance user interactions.</p>

      <Link href="#" className="text-xl underline">Overflow</Link>
      <p className="pt-2 pb-5">Overflow occurs when content exceeds its containers size. This module teaches how to handle and style overflowing content.</p>

      <Link href="#" className="text-xl underline">Backgrounds</Link>
      <p className="pt-2 pb-5">Explore various CSS techniques for styling backgrounds, from solid colors to complex patterns.</p>

      <Link href="#" className="text-xl underline">Text and Typography</Link>
      <p className="pt-2 pb-5">Discover the best practices for styling text, including font selection, spacing, and alignment.</p>

    </div>
  );
}


import '../css/welcome.css';
import '../css/box.css'
export default function Page() {
    return (
        <div className="max-w-screen-lg p-10 main">
            <p className="title pb-5">Box Model</p>
            <p>The <span className='bold'>CSS Box Model</span> is a fundamental concept that defines how elements are structured and spaced in a webpage. Every HTML element is treated as a rectangular box, which consists of different layers that affect its size and positioning.</p>
            <hr className="mt-5 mb-5" />

            <p className="text-xl pb-5">Box Model Components</p>
            <p className="pb-2">Each element in the box model consists of four main parts:</p>
            <ol className='ml-5'>
                <li> <span className="bold">Content</span> - the actual text, image, or other elements inside the box.</li>
                <p className="pb-2 pt-2">Defines the width and height of an element: </p>
                <pre className="code dark:bg-gray-800 mb-5">
                    <code>
                        div &#123; <br></br>
                        &ensp; width: 200px; <br></br>
                        &ensp; height: 100px; <br></br>
                        &#125;
                    </code>
                 </pre>
                <li><span className="bold">Padding</span> - The space between the content and the border, adding extra spacing inside the element.</li>
                <pre className="code dark:bg-gray-800 mb-5 mt-2">
                    <code>
                        div &#123; <br></br>
                        &ensp; padding: 10px; <span className="text-gray-400"><i>/ * Applies to all sides * /</i></span> <br></br>
                        &ensp; padding-top: 15px; <br></br>
                        &ensp; padding-right: 20px; <br></br>
                        &ensp; padding-bottom: 15px; <br></br>
                        &ensp; padding-left: 10px; <br></br>
                        &#125;
                    </code>
                 </pre>
                <li><span className="bold">Border</span> - A visible or invisible boundary surrounding the content and padding.</li>
                <p className="pt-2 pb-2">Defines the thickness, style, and color of the boxs boundary:</p>
                <pre className="code dark:bg-gray-800 mb-5">
                    <code>
                        div &#123; <br></br>
                        &ensp; border: 2px solid black; <br></br>
                        &ensp; border-top: 3px dashed blue; <br></br>
                        &ensp; border-radius: 5px; <span className="text-gray-400"><i>/ * Rounds the corners * / </i></span> <br></br>
                        &#125;
                    </code>
                 </pre>
                <li><span className="bold">Margin</span> - The outermost space, creating distance between elements.</li>
                <pre className="code dark:bg-gray-800 mb-5 mt-2">
                    <code>
                        div &#123; <br></br>
                        &ensp; margin: 20px; <span className="text-gray-400"><i>/ * Equal margin on all sides * / </i></span>  <br></br>
                        &ensp; margin-top: 10px; <br></br>
                        &ensp; margin-right: 15px; <br></br>
                        &ensp; margin-bottom: 10px; <br></br>
                        &ensp; margin-left: 5px; <br></br>
                        &#125;
                    </code>
                 </pre>
            </ol> 

            <hr className='mt-5' />

            <p className="text-lg mt-5 mb-5">Box Sizing: content-box vs. border-box </p>
            <p>By default, the width and height only apply to the content area <code className="code dark:bg-gray-800">(content-box)</code>. This means padding and borders increase the element’s total size.</p>
            <p className="pt-2">To avoid this, use <code className="code dark:bg-gray-800">box-sizing: border-box</code>, which includes padding and border inside the width and height:</p>
            <pre className="code dark:bg-gray-800 mb-5 mt-5">
                <code>
                    div &#123; <br></br>
                    &ensp; width: 200px; <br></br>
                    &ensp; height: 100px; <br></br>
                    &ensp; padding: 10px; <br></br>
                    &ensp; border: 5px solid black; <br></br>
                    &ensp; box-sizing: border-box; <br></br>
                    &#125;
                </code>
            </pre>
            <p>✅ The total size remains 200x100px, instead of growing to 230x130px. </p>

            <hr className='mt-5' />

            <p className="text-lg pt-5 pb-5">Common Issues and Fixes</p>
            <ol className='ml-5'>
                <li className='bold'>Margin Collapse</li>
                <p className="pt-2 pb-2">Margins of adjacent elements sometimes collapse into one, instead of stacking.</p>
                <p>Solution: Use <code className="code dark:bg-gray-800 p-2">overflow: hidden;</code> or <code className="code dark:bg-gray-800 p-2">display: flex;</code> on the parent element.</p>
                <li className="bold mt-2">Unexpected Element Size</li>
                <p className="pt-2">If an element appears larger than expected, check if padding and border are affecting the total width.</p>
                <p className='pt-2'>If an element <code className="code dark:bg-gray-800 p-2">box-sizing: border-box;</code> to include them in the total size.</p>
            </ol>
            
        </div>
    );
}
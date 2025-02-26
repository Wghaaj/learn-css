import '../css/welcome.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Focus</h1>
      <p className="pb-2">Focus happens when a user <span className="bold">clicks on an input field or interacts</span> with an element.</p>
      <p className='pb-2'>✅ Focused elements receive keyboard input.</p>
      <p>✅ Use <code className="code dark:bg-gray-800 p-2">:focus </code> to style elements when they gain focus.</p>

      <hr className="mt-5 mb-5" />
      
      <p className="text-lg pb-2">Example: Highlighting an Input Field</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
        input:focus &#123; <br />
        &ensp; border: 2px solid blue; <br />
        &ensp; outline: none; <br />
        &#125;
        </code>
      </pre>
      <p>When clicked, the <span className="bold">border turns blue</span> and removes the default browser outline.</p>

      <p className="text-lg mt-5">Example: Button Focus</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
        button:focus &#123; <br />
        &ensp; background: lightgreen; <br />
        &#125;
        </code>
      </pre>
      <p>Changes <span className="bold">button color when focused.</span></p>

      <p className="text-lg mt-5">Removing Default Focus Outline</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
        button:focus &#123; <br />
        &ensp; outline: none; <br />
        &#125;
        </code>
      </pre>
      <p>Removes the <span className="bold">default focus border</span>.</p>
    </div>
  )
}


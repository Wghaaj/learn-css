
import '../css/welcome.css';
import '../css/html.css';
import Link from 'next/link';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Welcome to Learn HTML!</h1>
      <p className="pb-2">HTML (HyperText Markup Language) is the main language used to structure web pages. It uses elements and attributes to organize content meaningfully.</p>
      <p className="pb-2">The Document Object Model (DOM) represents an HTML document as a structured set of objects. When a browser loads a page, it turns each HTML element into a JavaScript object, creating a tree of nodes.</p>

      <p className='text-xl pt-5 pb-2'><code>&lt;html&gt;</code></p>
      <p>The <code className='code dark:bg-gray-800'>&lt;html&gt;</code> element is the root of an HTML document. It contains the <code className='code dark:bg-gray-800'>&lt;head&gt;</code> and <code className='code dark:bg-gray-800'>&lt;body&gt;</code>, which include all the page content.</p>

      <p className="text-xl pt-5 pb-2">Content language</p>
      <p className='pb-2'>The <code className="code dark:bg-gray-800">lang</code> attribute in the <code className='code dark:bg-gray-800'>&lt;html&gt;</code> tag sets the documents language. The value is usually a two- or three-letter code, sometimes with a region code (e.g., <code className="code dark:bg-gray-800">fr-CA</code> for French in Canada).</p>
      <p className='pb-2'>The <samp>lang</samp> attribute can also be used inside the document for sections with different languages. It helps screen readers, search engines, and translation tools understand the content.</p>

      <p className="text-xl pt-5 pt-2"><code>&lt;head&gt;</code></p>
      <p className="pb-5">The <code className='code dark:bg-gray-800'>&lt;head&gt;</code> and <code className='code dark:bg-gray-800'>&lt;body&gt;</code> are the main parts inside <code className='code dark:bg-gray-800'>&lt;html&gt;</code>:</p>
      <pre className='mb-5 dark:bg-gray-800'><code className='code dark:bg-gray-800'>&lt;!DOCTYPE html&gt;<br></br>
          &lt;html lang=&quot;en-US&quot;&gt;<br></br>
          &lt;head&gt;<br></br>
          &lt;/head&gt;<br></br>
          &lt;body&gt;<br></br>
          &lt;/body&gt;<br></br>
          &lt;/html&gt;</code>
      </pre>
      <p className="pb-2">The <code className="code dark:bg-gray-800">&lt;head&gt;</code> contains metadata, while the <code className="code dark:bg-gray-800">&lt;body&gt;</code> holds the visible content.</p>

      <p className="pt-5 text-xl pb-2">Character encoding</p>
      <p className="pb-2">The <samp>charset</samp> declaration in <code className="code dark:bg-gray-800">&lt;head&gt;</code> sets the character encoding. It should be placed before the title to ensure proper text display.</p>
      <p className="pb-2">While browsers default to encodings like <i>windows-1252</i>, it is best to use <code className="code dark:bg-gray-800">UTF-8</code>. This encoding supports all characters and is required in HTML5.</p>
      <p className="pb-5">To set UTF-8 encoding, add:</p>
      <pre className='mb-5 dark:bg-gray-800'><code>&lt;meta charset=&quot;utf-8&quot; /&gt;</code></pre>

      <p className="text-xl pb-2">Document title</p>
      <p>Each page should have a unique title inside the <code className="code">&lt;title&gt;</code> tags. This title appears in the browser tab, history, search results, and social media previews.</p>
      <pre className="mt-5 mb-5 dark:bg-gray-800">
        <code>&lt;title&gt; Your title &lt;/title&gt;</code>
      </pre>

      <p className="text-xl pb-2">Viewport metadata</p>
      <p>The viewport meta tag makes your site responsive, ensuring it displays well on different screen sizes.</p>
      <pre className='mt-5 mb-5 dark:bg-gray-800'>
        <code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width&quot; /&gt;</code>
      </pre>
      <p>So far, our HTML file looks like this:</p>
      <pre className='mt-5 mb-5 dark:bg-gray-800'><code className='code dark:bg-gray-800'>&lt;!DOCTYPE html&gt;<br></br>
          &lt;html lang=&quot;en-US&quot;&gt;<br></br>
          &lt;head&gt;<br></br>
          &lt;meta charset=&quot;utf-8&quot; /&gt;<br></br>
          &lt;title&gt; Your Title &lt;/title&gt;<br></br>
          &lt;meta name=&quot;viewport&quot;content=&quot;width=device-width&quot; /&gt;<br></br>
          &lt;/head&gt;<br></br>
          &lt;body&gt;<br></br>
          <br></br>
          &lt;/body&gt;<br></br>
          &lt;/html&gt;</code>
      </pre>

      <p className="text-xl pb-2">CSS</p>
      <p className='pb-5'>CSS styles for your HTML are placed inside the <code className="code dark:bg-gray-800">&lt;head&gt;</code>.</p>
      <p className='pb-5'>There are three ways to include CSS: using <code className="code dark:bg-gray-800">&lt;link&gt;</code>, <code className="code dark:bg-gray-800">&lt;style&gt;</code>, or the <samp>style</samp> attribute.</p>
      <p className="pb-2">The best way is to use <code className="code dark:bg-gray-800">&lt;link&gt;</code> to include an external stylesheet. This keeps styles separate, improving both maintenance and performance.</p>
      <p className='pb-2'>The syntax is <code className="code dark:bg-gray-800">&lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot;&gt;</code>, where <samp>styles.css</samp> is the file path. The <code className="code dark:bg-gray-800">type=&quot;text/css&quot;</code> attribute is not needed unless using a different style format.</p>
      <pre className='mt-5 mb-5 dark:bg-gray-800'>
        <code className='code dark:bg-gray-800'>&lt;!DOCTYPE html&gt;<br></br>
          &lt;html lang=&quot;en-US&quot;&gt;<br></br>
          &lt;head&gt;<br></br>
          &lt;meta charset=&quot;utf-8&quot; /&gt;<br></br>
          &lt;title&gt; Your Title &lt;/title&gt;<br></br>
          &lt;meta name=&quot;viewport&quot;content=&quot;width=device-width&quot; /&gt;<br></br>
          &lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot;&gt; <br></br>
          &lt;/head&gt;<br></br>
          &lt;body&gt;<br></br>
          <br></br>
          &lt;/body&gt;<br></br>
          &lt;/html&gt;</code>
      </pre>

      <p>More information about HTML you can find <Link href="https://web.dev/learn/html" className='underline text-blue-700'>here</Link></p>
    </div>
  )
}


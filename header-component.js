//web component

class Header extends HTMLElement {
	constructor(){
        super() //super must be called first
        this.shadowEl = this.attachShadow({mode: "open"})
        this.headerEl = document.createElement('header')
        this.pageName = null //can set values via other functions
        this.render() //functions in the constructor are called immediately
    }

    render(){
        this.pageName = 'Home' // Update variables from inside functions

        //the color variable below is set via main styles wiht pink as a backup color
        const headerHTML = 
            `
                <style>
                    .dropdown{
                        width: 400px;
                        text-align: center;
                    }
                    slot{
                        color: var(--brand-color, pink);
                    }
                    h1 { color: red;}
                </style>
                <nav class="dropdown">
                <button class="dropbtn">HTML</button>
                    <div class="dropdown-div"> 
                        <a href="../html-info/text.html">Text & Info</a> 
                        <a href="../html-info/media.html">Media</a>
                        <a href="../html-info/forms.html">Forms</a>
                        <a href="../html-info/meta.html">Meta</a> 
                    </div>
                </nav>

                <nav class="dropdown">
                    <button class="dropbtn">CSS</button>
                    <div class="dropdown-div">
                        <a href="../css-info/csstext.html">Text Styling</a>  
                        <a href="../css-info/cssimg.html">Images Styling</a>
                        <a href="../css-info/cssform.html">Forms Styling</a>
                        <a href="../css-info/cssnotes.html">CSS Notes</a> 
                        <a href="../css-info/csssvg.html">SVG Animations</a> 
                    </div>
                </nav>
                <h1><slot></slot> Page</h1>
                <p>This is on the ${this.pageName} page.</p>
            `
        this.headerEl.innerHTML = headerHTML
        this.shadowEl.append(this.headerEl)

        //call a function after rendering
        this.activeLinks()

        //add events
        const titleEl =  this.shadowRoot.querySelector('h1')
        titleEl.onclick = this.myAlert
    }

    myAlert(){
        //adding event functions to the components
        alert('Clicked')
    }

    activeLinks(){	
        //add code here to update styles etc.
    }
}

customElements.define('header-component', Header);

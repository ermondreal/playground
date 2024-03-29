# playground

## Installation

### Using CDN

Include the following script tag just before the closing `</body>` tag in your HTML file:

```html
<script src="https://ermondreal.github.io/playground/js/custom-button.js"></script>
```

## Usage

### Simple
Just add `<ug-button>Sample Text</ug-button>` to your html.
```html
<ug-button>Sample Text</ug-button>
```

### With customization
Here, you can add custom attributes to `<ug-button>` see sample below.
```html
<ug-button
  customization="{
    'bg-color': 'red',
    'text-color': 'white'
  }"
  hover="{
    'bg-color': 'pink',
    'text-color': 'black'
  }"
  link="https://www.example.com"
>
  Click me
</ug-button>
```
For **_customization_** attribute, you can use
- `bg-color`
- `text-color`
- `padding`
- `border`
- `border-radius`
- `font-size`

For **_hover_** attribute,
- `bg-color`
- `text-color`

For **_link_**, just add the `url`.
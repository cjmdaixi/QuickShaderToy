uniform highp float iTime;
varying mediump vec2 qt_TexCoord0;
uniform highp float width;
uniform highp float height;

void main(void)
{
    vec2 p = (2.0 * vec2(qt_TexCoord0.x * width, (1-qt_TexCoord0.y) * height) - vec2(width, height)) / min(width, height);

    // background color
    vec3 bcol = vec3(1.0,0.8,0.7-0.07*p.y)*(1.0-0.25*length(p));

    // animate
    float tt = mod(iTime,1.5)/1.5;
    float ss = pow(tt,.2)*0.5 + 0.5;
    ss = 1.0 + ss*0.5*sin(tt*6.2831*3.0 + p.y*0.5)*exp(-tt*4.0);
    p *= vec2(0.5,1.5) + ss*vec2(0.5,-0.5);

    // shape
    p *= 0.8;
    p.y = -0.1 - p.y*1.2 + abs(p.x)*(1.0-abs(p.x));
    float r = length(p);
    float d = 0.5;

    // color
    float s = 0.75 + 0.75*p.x;
    s *= 1.0-0.4*r;
    s = 0.3 + 0.7*s;
    s *= 0.5+0.5*pow( 1.0-clamp(r/d, 0.0, 1.0 ), 0.1 );
    vec3 hcol = vec3(1.0,0.5*r,0.3)*s;

    vec3 col = mix( bcol, hcol, smoothstep( -0.01, 0.01, d-r) );

    gl_FragColor = vec4(col,1.0);
}

const box = document.querySelector('.tilt-container');
const boxRect = box.getBoundingClientRect();

box.addEventListener('mousemove', e => {
    const xPosition = (e.clientX - boxRect.left) / boxRect.width;

    const yPosition = (e.clientY - boxRect.top) / boxRect.height - 0.6;
    const xOffset = -(xPosition - 0.6);
    const dxNorm = Math.min(Math.max(xOffset, -0.6), 0.6);


    console.log(yPosition)

    box.style.webkitTransform = ` perspective(1000px)
                           rotateY(${dxNorm*40}deg)
                           rotateX(${yPosition*45}deg) `

    box.style.MozTransform = ` perspective(1000px)
                           rotateY(${dxNorm*45}deg)
                           rotateX(${yPosition*45}deg) `
    box.style.msTransform = ` perspective(1000px)
                           rotateY(${dxNorm*45}deg)
                           rotateX(${yPosition*45}deg) `
    box.style.OTransform = ` perspective(1000px)
                           rotateY(${dxNorm*45}deg)
                           rotateX(${yPosition*45}deg) `
    box.style.transform = ` perspective(1000px)
                           rotateY(${dxNorm*45}deg)
                           rotateX(${yPosition*45}deg) `

})

box.addEventListener('mouseleave', () => {
    box.style.transform = 'none'
})
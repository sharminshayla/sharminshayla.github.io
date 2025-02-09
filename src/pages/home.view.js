module.exports = function () {
  return `
    <div class="container my-5">
        <div class="row my-5">
            <div class="col-6">
                <h1>
                    <strong>Hi, I'm Shayla!</strong>
                </h1>
                <h3 class="my-5">
                    I'm a freelance architect based in Dhaka, Bangladesh. I specialize in architectural design and interior design.
                </h3>
                <div class="d-flex flex-column my-4">
                    <button type="button" class="btn btn-outline-primary btn-lg">Learn more about me</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg">See my works</button>
                </div>
            </div>
            <div class="col-6">
                <img src="/images/avatar.png" class="img-fluid" alt="Responsive image">
            </div>

        </div>
    </div>
  `;
}
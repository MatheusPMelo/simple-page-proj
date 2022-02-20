<template>
    <nav id="navbar">
        <div class="left">
            <router-link to="/"><img src="@/assets/logo-branco.png" alt="" srcset=""></router-link>
            <div v-for="navbar in navbars" :key="navbar.id">
                <router-link :to="navbar.router">{{ navbar.names }}</router-link>
            </div>
        </div>
        <div class="contact">
            <button>
                Contact
            </button>
        </div>
    </nav>

</template>

<script>
export default {
    name: 'Navbar',
    data: () => {
        return {
            navbars : [
                {names: "Home", router: "/"},
                {names: "Plans", router: "/plans"},
                {names: "Community", router: "/community"},
                {names: "About Us", router: "/about"}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
#navbar{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    
    .left{
        display: flex;
        align-items: center;

        img{
        width: 130px;
        }
        div{
            a{
                position: relative;
                font-family: arial;
                text-decoration: none;
                transition: .3s ease-in-out all;
                display:flex;
                justify-content: center;
                padding: 0 1rem;
                width: 100px;

                &:hover{
                    text-shadow: 0 0 10px grey;

                    &::before{
                        content: "";
                        position: absolute;
                        width: 30px;
                        height: 4px;
                        border-radius: 1rem;
                        background-color: white;
                        top: 20px;

                    }
                }
            }
        }
    }

    .contact{
        button{
            padding: 0.5rem 2rem;
            background-color: blue;
            border: solid 3px transparent;
            border-radius: 1rem;
            font-size: 15pt;
            cursor: pointer;
            box-shadow: 0 0 5px blue;
            transition: .5s;

            &:hover{
                background-color: #ffffff10;
                backdrop-filter: blur(12px);
                border: solid 3px blue;
                color: white;
            }
        } 
    }
}
</style>
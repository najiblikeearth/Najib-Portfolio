<template>
    <footer class="footer footer-center sticky-footer mb-5 text-base-content">
        <aside>
            <p>
                © {{ new Date().getFullYear() }} - All right reserved by
                <span class="text-primary font-semibold">JustNajib</span>
            </p>
        </aside>
    </footer>
</template>

<script setup></script>

<style>
.sticky-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>

class Semantic {
    static setSticky() {
        let stick = $(".ui.sticky").sticky({
            context: "#parent",
            offset: 20
        });
    }

    static refreshSticky() {
        $('.ui.sticky').sticky('refresh');
    }
}

window.Semantic = Semantic;
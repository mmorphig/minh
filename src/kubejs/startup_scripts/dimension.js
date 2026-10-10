// https://github.com/wolfieboy09/PortalJS/blob/master/src/main/java/dev/wolfieboy09/portaljs/kubeevents/PortalBuilder.java
PortalEvents.register(event => {
  event.create()
    .onlyLightInOverworld()
    .flatPortal()
    .frameBlock("minecraft:netherite_block")
    .setDestination("minh:superflat")
})
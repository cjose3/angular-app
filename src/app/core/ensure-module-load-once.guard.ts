export function throwIfAlreadyLoaded(targetModule) {
  if (targetModule) {
    const moduleName = targetModule.constructor.name
    throw new Error(`${moduleName} has already been loaded. Import this module in the AppModule only.`)
  }
}

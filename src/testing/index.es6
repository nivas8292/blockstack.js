import { runProofsUnitTests } from './proofsUnitTests'
import { runUtilsUnitTests } from './utilsUnitTests'
import { runServicesUnitTests } from './servicesUnitTests'
import { runProfilesUnitTests } from './profilesUnitTests'
import { runAuthTests } from './authUnitTests'

// Auth Tests
runAuthTests()

// Profiles Tests
runProfilesUnitTests()

// Proofs Tests
runUtilsUnitTests()
runServicesUnitTests()
runProofsUnitTests()

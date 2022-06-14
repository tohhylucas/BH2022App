import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import * as DocumentPicker from "expo-document-picker";

const Stack = createStackNavigator();

function UpdateGlobal(variable, input) {
  global.variable = input;
}

//Global Variables for Employees

global.EmployeePaySlipName = "";
global.EmployeeNSSVStartDate = "";
global.EmployeeNSSVEndDate = "";
global.EmployeeDOE = "";
global.EmployeeOccupation = "";
global.EmployeeCompanyName = "";
global.EmployeeCompanyAddress = "";
global.EmployeeCompanyPhone = "";

//Global Variables for Employers 1st input
global.EmployerTimesheet = "";
global.EmployerCSN = "";
global.EmployerEmployeeCompanyName = "";
global.EmployerEmployeeCompanyAddress = "";
global.EmployerEmployeeCompanyPhone = "";
global.EmployerEmployeeOccupation = "";
global.EmployerEmployeeDOE = "";

//Global Variables for Employers 2nd input
global.EmployerName = "Michael Wang";
global.EmployerOccupation = "";
global.EmployerNRIC = "S1234567G";
global.EmployerPhone = "96323488";
global.EmployerEmail = "MichaelWang@gmail.com";

// EMPLOYEES SECTION
function ProfileLoad() {
  const navigation = useNavigation();
  return (
    <View style={profileStyles.Profile}>
      <View style={profileStyles.Group904}>
        <View style={profileStyles.Component2}>
          <Text style={profileStyles.Txt695}>8:55</Text>
          <Image
            style={profileStyles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-I26%3A178%3B14%3A9?alt=media&token=88c48548-d260-498a-8f25-ef5ad7ac15b2",
            }}
          />
          <Image
            style={profileStyles.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-I26%3A178%3B14%3A7?alt=media&token=c6e57c70-c9b6-4f0a-9624-ebd1bc0702a6",
            }}
          />
          <Image
            style={profileStyles.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-I26%3A178%3B14%3A8?alt=media&token=04ab74fa-bd34-4d1c-823d-bd5a12919da9",
            }}
          />
        </View>
        <View style={profileStyles.Group511}>
          <Text style={profileStyles.Txt442}>Welcome Back, Michael!</Text>
        </View>
        <View style={profileStyles.Group3310}>
          <View style={profileStyles.Group452}>
            <Image
              style={profileStyles.Ellipse1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A243?alt=media&token=14b68ceb-46ac-48d4-b9c2-22b561f10387",
              }}
            />
            <View style={profileStyles.Group547}>
              <Text style={profileStyles.Txt895}>Name : Michael Wang</Text>
              <Text style={profileStyles.Txt895}>NRIC : SXXXX420W</Text>
              <Text style={profileStyles.Txt712}>
                Unit : 55 Infantry Brigade
              </Text>
              <Text style={profileStyles.Txt219}>
                ORNS Cycles : 3/3 LK 2/7 HK
              </Text>
            </View>
          </View>
        </View>
        <View style={profileStyles.Group743}>
          <Text style={profileStyles.Txt2810}>Your 2022 achievements</Text>
          <View style={profileStyles.Group547}>
            <View style={profileStyles.Group1058}>
              <Image
                style={profileStyles.CheckCircle}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A253?alt=media&token=5e2fd488-7061-43a5-b854-1fa22cadbe34",
                }}
              />
              <Text style={profileStyles.Txt2810}>IPPT</Text>
            </View>
            <View style={profileStyles.Group034}>
              <Image
                style={profileStyles.CheckCircle}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A259?alt=media&token=3b3aac0a-f503-4117-91b0-93027697b48f",
                }}
              />
              <Text style={profileStyles.Txt2810}>ATP</Text>
            </View>
            <View style={profileStyles.Group034}>
              <Image
                style={profileStyles.Vector3}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A252?alt=media&token=085b7689-cade-4006-bf5c-30534d610da2",
                }}
              />
              <Text style={profileStyles.Txt2810}>ICT</Text>
            </View>
            <View style={profileStyles.Group452}>
              <Image
                style={profileStyles.Vector3}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A262?alt=media&token=a6b07287-c86a-472e-a89c-0c228d05ba66",
                }}
              />
              <Text style={profileStyles.Txt2810}>Make Up Pay</Text>
            </View>
          </View>
        </View>
        <View style={profileStyles.Group309}>
          <Text style={profileStyles.Txt2810}>Manage IPPT</Text>
        </View>
        <View style={profileStyles.Group768}>
          <Text style={profileStyles.Txt869}>Manage ICT</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ManageMakeUpPay")}
        >
          <View style={profileStyles.Group541}>
            <Text style={profileStyles.Txt2810}>Manage Make-Up Pay</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ManageEmployees")}
        >
          <View style={profileStyles.Group699}>
            <Text style={profileStyles.Txt2810}>Manage Employees</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function ManageMakeUpPayLoad() {
  const navigation = useNavigation();
  return (
    <View style={ManageMakeUpPayStyle.ManageMakeUpPay}>
      <Text style={ManageMakeUpPayStyle.Txt758}>Application for Employees</Text>
      <View style={ManageMakeUpPayStyle.Group321}>
        <View style={ManageMakeUpPayStyle.Component2}>
          <Text style={ManageMakeUpPayStyle.Txt687}>8:55</Text>
          <Image
            style={ManageMakeUpPayStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/upjbvx8bps-I26%3A286%3B14%3A9?alt=media&token=f48ed22b-52c6-4148-8a5d-e4fa7c398a7c",
            }}
          />
          <Image
            style={ManageMakeUpPayStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/upjbvx8bps-I26%3A286%3B14%3A7?alt=media&token=fdd6d690-aa53-4611-b4de-330ad8904e11",
            }}
          />
          <Image
            style={ManageMakeUpPayStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/upjbvx8bps-I26%3A286%3B14%3A8?alt=media&token=8a53c73d-60e6-4c23-ad21-131195f0d741",
            }}
          />
        </View>
        <View style={ManageMakeUpPayStyle.Rectangle9} />
        <Image
          style={ManageMakeUpPayStyle.Undraw_printing_invoices_5R4r1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/upjbvx8bps-26%3A377?alt=media&token=707299b4-ebed-4b09-9599-33d6b4ec7d51",
          }}
        />
        <Text style={ManageMakeUpPayStyle.multiple1}>
          Start New Application to begin your Make Up Pay claim. Resume
          Application to continue from where you previously left off.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("ClaimsOptions")}>
          <View style={ManageMakeUpPayStyle.Group54}>
            <Text style={ManageMakeUpPayStyle.Txt9109}>
              Start New Application
            </Text>
          </View>
        </TouchableOpacity>
        <View style={ManageMakeUpPayStyle.Group55}>
          <Text style={ManageMakeUpPayStyle.Txt9109}>Resume Application</Text>
        </View>
      </View>
    </View>
  );
}

function ClaimsOptionsLoad() {
  const navigation = useNavigation();
  return (
    <View style={ClaimsOptionsStyle.ClaimsOptions}>
      <View style={ClaimsOptionsStyle.Group035}>
        <View style={ClaimsOptionsStyle.Component4}>
          <Text style={ClaimsOptionsStyle.Txt945}>8:55</Text>
          <Image
            style={ClaimsOptionsStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-I75%3A716%3B14%3A9?alt=media&token=1b5cf93e-d028-4f86-a968-4d4aaf9aa45a",
            }}
          />
          <Image
            style={ClaimsOptionsStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-I75%3A716%3B14%3A7?alt=media&token=bfd4f10a-88df-49e1-9dd9-13e8970b2c4c",
            }}
          />
          <Image
            style={ClaimsOptionsStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-I75%3A716%3B14%3A8?alt=media&token=fa7bc94e-f9d7-4f49-bb2e-c477e3bdf2cf",
            }}
          />
        </View>
        <View style={ClaimsOptionsStyle.Group823}>
          <Text style={ClaimsOptionsStyle.Txt533}>Claim Options</Text>
          <Image
            style={ClaimsOptionsStyle.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-71%3A537?alt=media&token=34f47283-7729-4659-90b8-8ab85ea18e1f",
            }}
          />
          <Image
            style={ClaimsOptionsStyle.Vector4}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-75%3A727?alt=media&token=8c5aea56-c617-4bd0-8766-9dacd250c53b",
            }}
          />
          <Image
            style={ClaimsOptionsStyle.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-75%3A729?alt=media&token=297cd230-7833-4aff-af2a-437932375a20",
            }}
          />
          <Image
            style={ClaimsOptionsStyle.Vector5}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-75%3A730?alt=media&token=f8c19176-6f2c-4a02-be29-117c29487a01",
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <View style={ClaimsOptionsStyle.Group52}>
            <Text style={ClaimsOptionsStyle.Txt732}>Delete application</Text>
          </View>
        </TouchableOpacity>
        <Text style={ClaimsOptionsStyle.Txt165}>
          Please select your claim option
        </Text>
        <View style={ClaimsOptionsStyle.Group784}>
          <Text style={ClaimsOptionsStyle.Txt494}>Income Tax</Text>
        </View>
        <View style={ClaimsOptionsStyle.Group932}>
          <Text style={ClaimsOptionsStyle.Txt737}>✓</Text>
          <Text style={ClaimsOptionsStyle.Txt494}>Average Income</Text>
        </View>
        <View style={ClaimsOptionsStyle.Group901}>
          <Text style={ClaimsOptionsStyle.Txt494}>Replacement</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Payslip")}>
          <View style={ClaimsOptionsStyle.Group417}>
            <Text style={ClaimsOptionsStyle.Txt428}>Save and Continue</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={ClaimsOptionsStyle.Group792}>
            <Text style={ClaimsOptionsStyle.Txt428}>Save and Go Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function PaySlipLoad() {
  const navigation = useNavigation();
  const [PaySlipName, changePaySlipName] = useState("Upload Payslip");
  const pickPaySlip = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result.uri);
    console.log(result);
    console.log(result.name);
    changePaySlipName(result.name);
    global.EmployeePaySlipName = result.name;
  };

  return (
    <View style={PaySlipStyle.UploadPaySlip}>
      <View style={PaySlipStyle.Group871}>
        <View style={PaySlipStyle.Component2}>
          <Text style={PaySlipStyle.Txt461}>8:55</Text>
          <Image
            style={PaySlipStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ixe9vd7uwqg-I26%3A488%3B14%3A9?alt=media&token=722a8e2a-37b6-4e49-8aa7-2124fbc83921",
            }}
          />
          <Image
            style={PaySlipStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ixe9vd7uwqg-I26%3A488%3B14%3A7?alt=media&token=d65cb1f8-38ee-470d-bd9c-2b6f6ff03aa5",
            }}
          />
          <Image
            style={PaySlipStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ixe9vd7uwqg-I26%3A488%3B14%3A8?alt=media&token=df731cbc-5fbf-441d-9062-548e232d3f56",
            }}
          />
        </View>
        <View style={PaySlipStyle.Group714}>
          <Text style={PaySlipStyle.Txt275}>Upload Payslip</Text>
          <Image
            style={PaySlipStyle.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ixe9vd7uwqg-71%3A544?alt=media&token=b3f77aa4-0978-4aba-b705-90eb76924961",
            }}
          />
          <Image
            style={PaySlipStyle.Vector4}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ixe9vd7uwqg-71%3A543?alt=media&token=1cab0a44-8e8d-42a7-9a97-03549ef19071",
            }}
          />
          <Image
            style={PaySlipStyle.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ixe9vd7uwqg-71%3A545?alt=media&token=b2f466f9-1879-4ba1-ad51-5a856296ad21",
            }}
          />
          <Image
            style={PaySlipStyle.Vector5}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ixe9vd7uwqg-71%3A546?alt=media&token=db2a83f8-cac0-407b-a5ac-4e8af60d8fe3",
            }}
          />
        </View>
        <View style={PaySlipStyle.Group50}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(StackActions.popToTop())}
          >
            <Text style={PaySlipStyle.Txt734}>Delete application</Text>
          </TouchableOpacity>
        </View>

        <Text style={PaySlipStyle.Txt434}>
          Please upload your past 6 month’s net income as one PDF
        </Text>
        <View style={PaySlipStyle.Group76}>
          <Text style={PaySlipStyle.Txt1064}>{PaySlipName}</Text>
          <View style={PaySlipStyle.Group312}>
            <TouchableOpacity onPress={pickPaySlip}>
              <Text style={PaySlipStyle.Txt5410}>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={PaySlipStyle.Group57}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ixe9vd7uwqg-71%3A672?alt=media&token=1607d5ed-10fd-4837-90da-f58208c61086",
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("EmployeesParticulars")}
        >
          <View style={PaySlipStyle.Group307}>
            <Text style={PaySlipStyle.Txt444}>Save and Continue</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={PaySlipStyle.Group568}>
            <Text style={PaySlipStyle.Txt444}>Save and Go Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function EmployeesParticularsLoad() {
  const navigation = useNavigation();
  const [NSSVStartDate, changeNSSVStartDate] = useState("DD/MM/YYYY");
  const [NSSVEndDate, changeNSSVEndDate] = useState("DD/MM/YYYY");
  const [EmployeeOccupation, changeEmployeeOccupation] = useState("");
  const [EmployeeCompanyName, changeEmployeeCompanyName] = useState("");
  const [EmployeeCompanyAddress, changeEmployeeCompanyAddress] = useState("");
  const [EmployeeCompanyPhone, changeEmployeeCompanyPhone] = useState("");
  global.EmployeeNSSVStartDate = NSSVStartDate;
  global.EmployeeNSSVEndDate = NSSVEndDate;
  global.EmployeeOccupation = EmployeeOccupation;
  global.EmployeeCompanyName = EmployeeCompanyName;
  global.EmployeeCompanyAddress = EmployeeCompanyAddress;
  global.EmployeeCompanyPhone = EmployeeCompanyPhone;

  return (
    <View style={EmployeesParticularsStyle.EnterParticulars}>
      <View style={EmployeesParticularsStyle.Group1095}>
        <View style={EmployeesParticularsStyle.Component1}>
          <Text style={EmployeesParticularsStyle.Txt766}>8:55</Text>
          <Image
            style={EmployeesParticularsStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kdvg23pom48-I26%3A620%3B14%3A9?alt=media&token=cfdcf599-3a0b-4de6-80f9-86f3ad932190",
            }}
          />
          <Image
            style={EmployeesParticularsStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kdvg23pom48-I26%3A620%3B14%3A7?alt=media&token=b169d9fd-3a8f-4f76-ad45-4cb4f9c107e2",
            }}
          />
          <Image
            style={EmployeesParticularsStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kdvg23pom48-I26%3A620%3B14%3A8?alt=media&token=2168e35e-723c-4768-bca2-6126523bb4c1",
            }}
          />
        </View>
        <View style={EmployeesParticularsStyle.Group768}>
          <Text style={EmployeesParticularsStyle.Txt526}>Particulars</Text>
          <Image
            style={EmployeesParticularsStyle.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kdvg23pom48-71%3A360?alt=media&token=9a165b05-509b-45f3-a081-e9a55892902b",
            }}
          />
          <Image
            style={EmployeesParticularsStyle.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kdvg23pom48-71%3A359?alt=media&token=661a2ff1-8daa-4af7-a383-b72d8b94688e",
            }}
          />
          <Image
            style={EmployeesParticularsStyle.Vector4}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kdvg23pom48-71%3A361?alt=media&token=40e452df-69cd-4c26-8a65-f1fda022c33d",
            }}
          />
          <Image
            style={EmployeesParticularsStyle.Vector5}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kdvg23pom48-71%3A362?alt=media&token=76dc1017-7081-40cf-807d-8ec33c0cbd88",
            }}
          />
        </View>
        <View style={EmployeesParticularsStyle.Group51}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(StackActions.popToTop())}
          >
            <Text style={EmployeesParticularsStyle.Txt191}>
              Delete application
            </Text>
          </TouchableOpacity>
        </View>
        <View style={EmployeesParticularsStyle.Group64}>
          <Text style={EmployeesParticularsStyle.Txt098}>NS/SV Training</Text>
          <View style={EmployeesParticularsStyle.Group63}>
            <View style={EmployeesParticularsStyle.Group627}>
              <Text style={EmployeesParticularsStyle.Txt628}>Start Date</Text>
              <Text style={EmployeesParticularsStyle.Txt886}>End Date</Text>
            </View>
            <View style={EmployeesParticularsStyle.Group471}>
              <View style={EmployeesParticularsStyle.Group175}>
                <TextInput
                  style={styles.ShortTextInput}
                  onChangeText={changeNSSVStartDate}
                  value={NSSVStartDate}
                />
              </View>
              <View style={EmployeesParticularsStyle.Group6910}>
                <TextInput
                  style={styles.ShortTextInput}
                  onChangeText={changeNSSVEndDate}
                  value={NSSVEndDate}
                />
              </View>
            </View>
          </View>
          <Text style={EmployeesParticularsStyle.Txt321}>
            Date of Employment
          </Text>
          <View style={EmployeesParticularsStyle.Group557}>
            <TextInput style={styles.LongTextInput} />
          </View>
          <Text style={EmployeesParticularsStyle.Txt321}>
            Occupation/Designation
          </Text>
          <TextInput
            style={styles.LongTextInput}
            onChangeText={changeEmployeeOccupation}
            value={EmployeeOccupation}
          />
          <Text style={EmployeesParticularsStyle.Txt829}>
            Company Particulars
          </Text>
          <Text style={EmployeesParticularsStyle.Txt555}>Name</Text>
          <TextInput
            style={styles.LongTextInput}
            onChangeText={changeEmployeeCompanyName}
            value={EmployeeCompanyName}
          />
          <Text style={EmployeesParticularsStyle.Txt555}>Address</Text>
          <TextInput
            style={styles.LongTextInput}
            onChangeText={changeEmployeeCompanyAddress}
            value={EmployeeCompanyAddress}
          />
          <Text style={EmployeesParticularsStyle.Txt1004}>Phone</Text>
          <TextInput
            style={styles.LongTextInput}
            onChangeText={changeEmployeeCompanyPhone}
            value={EmployeeCompanyPhone}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("EmployeesConfirmation")}
        >
          <View style={EmployeesParticularsStyle.Group199}>
            <Text style={EmployeesParticularsStyle.Txt618}>
              Save and Continue
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={EmployeesParticularsStyle.Group616}>
            <Text style={EmployeesParticularsStyle.Txt618}>
              Save and Go Back
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function EmployeesConfirmationLoad() {
  const navigation = useNavigation();
  return (
    <View style={EmployeesConfirmationStyles.ReviewSubmission}>
      <View style={EmployeesConfirmationStyles.Group005}>
        <View style={EmployeesConfirmationStyles.Component2}>
          <Text style={EmployeesConfirmationStyles.Txt1081}>8:55</Text>
          <Image
            style={EmployeesConfirmationStyles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2u9ajrz2fj-I71%3A382%3B14%3A9?alt=media&token=d417ebf8-699e-48ea-a7f8-633508135440",
            }}
          />
          <Image
            style={EmployeesConfirmationStyles.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2u9ajrz2fj-I71%3A382%3B14%3A7?alt=media&token=de47ab5c-a958-4abf-9d17-5c6dfb84015c",
            }}
          />
          <Image
            style={EmployeesConfirmationStyles.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2u9ajrz2fj-I71%3A382%3B14%3A8?alt=media&token=e1cf165b-b93a-448e-8ca4-fddaba97800d",
            }}
          />
        </View>
        <View style={EmployeesConfirmationStyles.Group0110}>
          <Text style={EmployeesConfirmationStyles.Txt836}>Review</Text>
          <Image
            style={EmployeesConfirmationStyles.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2u9ajrz2fj-71%3A400?alt=media&token=f746b083-a71f-44c5-82c7-8c50089edcb4",
            }}
          />
          <Image
            style={EmployeesConfirmationStyles.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2u9ajrz2fj-71%3A660?alt=media&token=173b33f6-b0f9-4769-b026-c07db8b01658",
            }}
          />
          <Image
            style={EmployeesConfirmationStyles.Vector4}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2u9ajrz2fj-71%3A401?alt=media&token=2a1e3e77-fbf1-41c9-a0c1-dafd9053c395",
            }}
          />
          <Image
            style={EmployeesConfirmationStyles.Vector5}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2u9ajrz2fj-71%3A398?alt=media&token=13f55a8f-1bd8-4512-8966-5dccc48732b2",
            }}
          />
        </View>
        <View style={EmployeesConfirmationStyles.Group74}>
          <Text style={EmployeesConfirmationStyles.Txt798}>
            Review your submission
          </Text>
          <View style={EmployeesConfirmationStyles.Group65}>
            <Text style={EmployeesConfirmationStyles.Txt928}>Claim Option</Text>
            <View style={EmployeesConfirmationStyles.Frame2}>
              <Text style={EmployeesConfirmationStyles.Txt197}>
                Average Income
              </Text>
            </View>
            <Image
              style={EmployeesConfirmationStyles.Vector6}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2u9ajrz2fj-71%3A581?alt=media&token=1078fc89-71ae-4245-8cd7-34618549fcb2",
              }}
            />
          </View>
          <View style={EmployeesConfirmationStyles.Group66}>
            <Text style={EmployeesConfirmationStyles.Txt769}>
              Payslip Upload
            </Text>
            <Text style={EmployeesConfirmationStyles.Txt223}>
              {EmployeePaySlipName}
            </Text>
            <Image
              style={EmployeesConfirmationStyles.Vector6}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2u9ajrz2fj-71%3A582?alt=media&token=830480ea-c5e5-4226-928e-c81f0e32d81b",
              }}
            />
          </View>
          <View style={EmployeesConfirmationStyles.Group67}>
            <Text style={EmployeesConfirmationStyles.Txt994}>
              NS/SV Training
            </Text>
            <Image
              style={EmployeesConfirmationStyles.Vector6}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2u9ajrz2fj-71%3A583?alt=media&token=a442a021-13d4-4c4c-93e7-48f64256d784",
              }}
            />
          </View>
          <View style={EmployeesConfirmationStyles.Group68}>
            <Text style={EmployeesConfirmationStyles.Txt531}>Start Date</Text>
            <Text style={EmployeesConfirmationStyles.Txt407}>
              {EmployeeNSSVStartDate}
            </Text>
          </View>
          <View style={EmployeesConfirmationStyles.Group68}>
            <Text style={EmployeesConfirmationStyles.Txt393}>End Date</Text>
            <Text style={EmployeesConfirmationStyles.Txt407}>
              {EmployeeNSSVEndDate}
            </Text>
          </View>
          <View style={EmployeesConfirmationStyles.Group70}>
            <Text style={EmployeesConfirmationStyles.Txt448}>
              Occupation/ Designation
            </Text>
            <Text style={EmployeesConfirmationStyles.Txt407}>
              {EmployeeOccupation}
            </Text>
          </View>
          <View style={EmployeesConfirmationStyles.Group71}>
            <Text style={EmployeesConfirmationStyles.Txt958}>
              Company Particulars
            </Text>
          </View>
          <View style={EmployeesConfirmationStyles.Group467}>
            <Text style={EmployeesConfirmationStyles.Txt825}>Name</Text>
            <Text style={EmployeesConfirmationStyles.Txt407}>
              {EmployeeCompanyName}
            </Text>
          </View>
          <View style={EmployeesConfirmationStyles.Group73}>
            <Text style={EmployeesConfirmationStyles.Txt083}>Address</Text>
            <Text style={EmployeesConfirmationStyles.Txt407}>
              {EmployeeCompanyAddress}
            </Text>
          </View>
          <View style={EmployeesConfirmationStyles.Group877}>
            <Text style={EmployeesConfirmationStyles.Txt6102}>Phone</Text>
            <Text style={EmployeesConfirmationStyles.Txt407}>
              {EmployeeCompanyPhone}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("EmployeesSubmission")}
        >
          <View style={EmployeesConfirmationStyles.Group662}>
            <Text style={EmployeesConfirmationStyles.Txt662}>Submit</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={EmployeesConfirmationStyles.Group355}>
            <Text style={EmployeesConfirmationStyles.Txt662}>
              Save and Go Back
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={EmployeesConfirmationStyles.Group52}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <Text style={EmployeesConfirmationStyles.Txt772}>
            Delete application
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function EmployeesSubmissionLoad() {
  const navigation = useNavigation();
  return (
    <View style={EmployeesSubmissionStyle.MakeUpPayCompleted}>
      <View style={EmployeesSubmissionStyle.Group543}>
        <View style={EmployeesSubmissionStyle.Component2}>
          <Text style={EmployeesSubmissionStyle.Txt090}>8:55</Text>
          <Image
            style={EmployeesSubmissionStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lpgyl8587ym-I26%3A941%3B14%3A9?alt=media&token=0ef6bc5d-2541-439d-acff-2635f7f2a54f",
            }}
          />
          <Image
            style={EmployeesSubmissionStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lpgyl8587ym-I26%3A941%3B14%3A7?alt=media&token=3d6e9ff5-f623-4ff3-8f26-d4253f7dde25",
            }}
          />
          <Image
            style={EmployeesSubmissionStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lpgyl8587ym-I26%3A941%3B14%3A8?alt=media&token=929386b7-1845-41f6-bac7-96bc3ddfd9d9",
            }}
          />
        </View>
        <View style={EmployeesSubmissionStyle.Group191}>
          <Text style={EmployeesSubmissionStyle.Txt755}>
            Make Up Pay Submitted{" "}
          </Text>
        </View>
        <Image
          style={EmployeesSubmissionStyle.Undraw_well_done_i2wr1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lpgyl8587ym-26%3A1046?alt=media&token=2c7c0a3b-ea5d-471a-a5ef-e6f18fc26b20",
          }}
        />
        <Text style={EmployeesSubmissionStyle.Txt526}>
          Congratulations on completing the Make Up Pay application Please give
          up to 7 working days for payment to be received.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <View style={EmployeesSubmissionStyle.Group459}>
            <Text style={EmployeesSubmissionStyle.Txt413}>Back to Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//EMPLOYERS FORM
function ManageEmployeesLoad() {
  const navigation = useNavigation();
  return (
    <View style={ManageEmployeesStyle.ManageEmployees}>
      <View style={ManageEmployeesStyle.Group183}>
        <View style={ManageEmployeesStyle.Component4}>
          <Text style={ManageEmployeesStyle.Txt667}>8:55</Text>
          <Image
            style={ManageEmployeesStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/78bjvtppqt-I71%3A124%3B14%3A9?alt=media&token=be93ecb7-20b9-4653-8672-f5a5eb5638e8",
            }}
          />
          <Image
            style={ManageEmployeesStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/78bjvtppqt-I71%3A124%3B14%3A7?alt=media&token=e9704e4c-06de-4f6c-81d0-9c63de15a8a7",
            }}
          />
          <Image
            style={ManageEmployeesStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/78bjvtppqt-I71%3A124%3B14%3A8?alt=media&token=8297e653-4529-4541-83dd-78218dac5dd8",
            }}
          />
        </View>
        <View style={ManageEmployeesStyle.Group858}>
          <Text style={ManageEmployeesStyle.Txt814}>
            Application for Employers
          </Text>
        </View>
        <View style={ManageEmployeesStyle.Group451}>
          <Image
            style={ManageEmployeesStyle.Undraw_fill_form_re_cwyf11}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/78bjvtppqt-70%3A284?alt=media&token=8278a94f-658d-4db3-bb25-533f08aea479",
            }}
          />
        </View>
        <Text style={ManageEmployeesStyle.multiple1}>
          Start New Application to begin your Make Up Pay claim. Resume
          Application to continue from where you previously left off.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Timesheet")}>
          <View style={ManageEmployeesStyle.Group57}>
            <Text style={ManageEmployeesStyle.Txt10102}>
              Start New Application
            </Text>
          </View>
        </TouchableOpacity>
        <View style={ManageEmployeesStyle.Group56}>
          <Text style={ManageEmployeesStyle.Txt10102}>Resume Application</Text>
        </View>
      </View>
    </View>
  );
}

function TimesheetLoad() {
  const navigation = useNavigation();
  const [DocumentName, changeDocumentName] = useState("Upload PDF");
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result.uri);
    console.log(result);
    console.log(result.name);
    changeDocumentName(result.name);
    global.EmployerTimesheetName = result.name;
  };

  return (
    <View style={TimesheetStyles.UploadTimesheet}>
      <View style={TimesheetStyles.Group7106}>
        <View style={TimesheetStyles.Component2}>
          <Text style={TimesheetStyles.Txt4410}>8:55</Text>
          <Image
            style={TimesheetStyles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qeyfh3vxvx-I70%3A332%3B14%3A9?alt=media&token=ad920c35-f4d4-48f6-bd31-c16406cca997",
            }}
          />
          <Image
            style={TimesheetStyles.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qeyfh3vxvx-I70%3A332%3B14%3A7?alt=media&token=4f797f04-04b1-403d-aa13-b1eb0cfb8229",
            }}
          />
          <Image
            style={TimesheetStyles.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qeyfh3vxvx-I70%3A332%3B14%3A8?alt=media&token=e906c0de-af28-4fda-9fc4-9137b99fec73",
            }}
          />
        </View>
        <View style={TimesheetStyles.Group765}>
          <Text style={TimesheetStyles.Txt223}>Upload Hours</Text>
          <Image
            style={TimesheetStyles.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qeyfh3vxvx-71%3A734?alt=media&token=b4670399-297b-404b-b0b6-b4727a99c307",
            }}
          />
          <Image
            style={TimesheetStyles.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qeyfh3vxvx-71%3A735?alt=media&token=5f1aab67-3f37-4bca-a291-8b5001798fba",
            }}
          />
          <Image
            style={TimesheetStyles.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qeyfh3vxvx-71%3A736?alt=media&token=7bc4ec98-3515-4fd6-b203-77b90ac33adb",
            }}
          />
          <Image
            style={TimesheetStyles.Vector4}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qeyfh3vxvx-71%3A737?alt=media&token=323f14ae-42ff-48a1-88a0-56913e9218eb",
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <View style={TimesheetStyles.Group53}>
            <Text style={TimesheetStyles.Txt296}>Delete application</Text>
          </View>
        </TouchableOpacity>
        <Text style={TimesheetStyles.Txt1088}>
          Please upload your employee’s working hours as a spreadsheet or excel
          file.
        </Text>
        <View style={TimesheetStyles.Group59}>
          <Text style={TimesheetStyles.Txt5910}>{DocumentName}</Text>
          <TouchableOpacity onPress={pickDocument}>
            <View style={TimesheetStyles.Group397}>
              <Text style={TimesheetStyles.Txt492}>Upload</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Image
          style={TimesheetStyles.Group60}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qeyfh3vxvx-71%3A1018?alt=media&token=a0d82d1e-3610-4a20-9b93-fea609f6424b",
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("EmployersParticulars1")}
        >
          <View style={TimesheetStyles.Group1023}>
            <Text style={TimesheetStyles.Txt1061}>Save and Continue</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={TimesheetStyles.Group233}>
            <Text style={TimesheetStyles.Txt1061}>Save and Go Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function EmployersParticulars1Load() {
  const navigation = useNavigation();

  const [CSN, ChangeCSN] = React.useState("");
  const [EmployeeCompanyName, ChangeEmployeeCompanyName] = React.useState("");
  const [EmployeeCompanyAddress, ChangeEmployeeCompanyAddress] =
    React.useState("");
  const [EmployeeCompanyPhone, ChangeEmployeeCompanyPhone] = React.useState("");
  const [EmployeeOccupation, ChangeEmployeeOccupation] = React.useState("");
  const [EmployeeEmployment, ChangeEmployeeEmployment] =
    React.useState("DD/MM/YYYY");
  global.EmployerCSN = CSN;
  global.EmployerEmployeeCompanyName = EmployeeCompanyName;
  global.EmployerEmployeeCompanyAddress = EmployeeCompanyAddress;
  global.EmployerEmployeeCompanyPhone = EmployeeCompanyPhone;
  global.EmployerEmployeeOccupation = EmployeeOccupation;
  global.EmployerEmployeeDOE = EmployeeEmployment;

  return (
    <View style={EmployersParticulars1.EmployeeSDetails}>
      <View style={EmployersParticulars1.Group352}>
        <View style={EmployersParticulars1.Component4}>
          <Text style={EmployersParticulars1.Txt294}>8:55</Text>
          <Image
            style={EmployersParticulars1.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-I71%3A910%3B14%3A9?alt=media&token=e11acb73-030e-4cc1-853a-1b4cce289d01",
            }}
          />
          <Image
            style={EmployersParticulars1.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-I71%3A910%3B14%3A7?alt=media&token=75b3e64a-e0b6-4624-8ef9-25b27da51267",
            }}
          />
          <Image
            style={EmployersParticulars1.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-I71%3A910%3B14%3A8?alt=media&token=4527323e-f635-4d46-9736-dee0cbdfa9ed",
            }}
          />
        </View>
        <View style={EmployersParticulars1.Group524}>
          <Text style={EmployersParticulars1.Txt384}>Particulars</Text>
          <View style={EmployersParticulars1.Group311}>
            <Text style={EmployersParticulars1.Txt502}>
              Employee Particulars
            </Text>
            <Image
              style={EmployersParticulars1.Vector3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-71%3A1020?alt=media&token=e98aed13-bec4-4dff-ac20-8552c8d8bd10",
              }}
            />
            <Image
              style={EmployersParticulars1.Vector3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-71%3A1021?alt=media&token=03ba0baf-a6b0-4680-bb86-ce373682bae6",
              }}
            />
            <Image
              style={EmployersParticulars1.Vector3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-71%3A1022?alt=media&token=3773130a-550d-44db-baf2-c32e21543ac6",
              }}
            />
            <Image
              style={EmployersParticulars1.Vector4}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-71%3A1023?alt=media&token=90c1f1d6-1a15-4a64-9175-ed45bf942ee2",
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <View style={EmployersParticulars1.Group55}>
            <Text style={EmployersParticulars1.Txt209}>Delete application</Text>
          </View>
        </TouchableOpacity>
        <Text style={EmployersParticulars1.Txt729}>
          Please enter your employee’s details.
        </Text>
        <View style={EmployersParticulars1.Group62}>
          <Text style={EmployersParticulars1.Txt394}>
            CPF Submission Number (CSN)
          </Text>
          <TextInput
            style={styles.LongTextInput}
            onChangeText={ChangeCSN}
            value={CSN}
          />
          <Text style={EmployersParticulars1.Txt466}>
            Employee’s Company Particulars
          </Text>
          <Text style={EmployersParticulars1.Txt894}>Name</Text>
          <TextInput
            style={styles.LongTextInput}
            onChangeText={ChangeEmployeeCompanyName}
            value={EmployeeCompanyName}
          />
          <Text style={EmployersParticulars1.Txt894}>Address</Text>
          <TextInput
            style={styles.LongTextInput}
            onChangeText={ChangeEmployeeCompanyAddress}
            value={EmployeeCompanyAddress}
          />
          <Text style={EmployersParticulars1.Txt396}>Phone</Text>
          <TextInput
            style={styles.ShortTextInput}
            onChangeText={ChangeEmployeeCompanyPhone}
            value={EmployeeCompanyPhone}
          />
          <Text style={EmployersParticulars1.Txt748}>Employee Particulars</Text>
          <Text style={EmployersParticulars1.Txt894}>
            Occupation/Designation
          </Text>
          <TextInput
            style={styles.ShortTextInput}
            onChangeText={ChangeEmployeeOccupation}
            value={EmployeeOccupation}
          />
          <Text style={EmployersParticulars1.Txt894}>Date of Employment</Text>
          <TextInput
            style={styles.ShortTextInput}
            onChangeText={ChangeEmployeeEmployment}
            value={EmployeeEmployment}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("EmployersParticulars2")}
        >
          <View style={EmployersParticulars1.Group683}>
            <Text style={EmployersParticulars1.Txt770}>Save and Continue</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={EmployersParticulars1.Group764}>
            <Text style={EmployersParticulars1.Txt770}>Save and Go Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function EmployersParticulars2Load() {
  const navigation = useNavigation();

  const [EmployerName, onChangeEmployerName] = React.useState("Michael Wang");
  const [EmployerOccupation, onChangeEmployerOccupation] = React.useState("");
  const [EmployerNRIC, onChangeEmployerNRIC] = React.useState("S1234567G");
  const [EmployerPhone, onChangeEmployerPhone] = React.useState("96323488");
  const [EmployerEmail, onChangeEmployerEmail] = React.useState(
    "MichaelWang@gmail.com"
  );

  global.EmployerName = EmployerName;

  global.EmployerOccupation = EmployerOccupation;

  global.EmployerNRIC = EmployerNRIC;
  global.EmployerPhone = EmployerPhone;
  global.EmployerEmail = EmployerEmail;

  return (
    <View style={EmployersParticulars2.CertifyingOfficerSDetails}>
      <View style={EmployersParticulars2.Group963}>
        <View style={EmployersParticulars2.Component4}>
          <Text style={EmployersParticulars2.Txt1098}>8:55</Text>
          <Image
            style={EmployersParticulars2.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qw29zmqko-I71%3A971%3B14%3A9?alt=media&token=a637697b-79dd-4c20-934b-3cec2c2fa9e9",
            }}
          />
          <Image
            style={EmployersParticulars2.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qw29zmqko-I71%3A971%3B14%3A7?alt=media&token=1e036598-2e02-40c7-ae92-181ac4d8e8f0",
            }}
          />
          <Image
            style={EmployersParticulars2.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qw29zmqko-I71%3A971%3B14%3A8?alt=media&token=3bf718dd-f549-4885-bb57-1881afffb349",
            }}
          />
        </View>
        <View style={EmployersParticulars2.Group7109}>
          <Text style={EmployersParticulars2.Txt374}>Officer Particulars</Text>
          <Image
            style={EmployersParticulars2.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qw29zmqko-71%3A1025?alt=media&token=a84a8832-0b13-4e42-89f8-01de860f9848",
            }}
          />
          <Image
            style={EmployersParticulars2.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qw29zmqko-71%3A1026?alt=media&token=e580333f-84a6-4ea4-8893-973c367036a2",
            }}
          />
          <Image
            style={EmployersParticulars2.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qw29zmqko-71%3A1027?alt=media&token=7824bbaf-c9c2-4e49-b0a5-6438d648074b",
            }}
          />
          <Image
            style={EmployersParticulars2.Vector4}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qw29zmqko-71%3A1028?alt=media&token=97ebba28-d8ea-43db-8e4b-892ff1dbf1dc",
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <View style={EmployersParticulars2.Group55}>
            <Text style={EmployersParticulars2.Txt886}>Delete application</Text>
          </View>
        </TouchableOpacity>
        <View style={EmployersParticulars2.Group61}>
          <Text style={EmployersParticulars2.Txt536}>Name</Text>
          <TextInput
            style={styles.LongTextInput}
            onChangeText={onChangeEmployerName}
            value={EmployerName}
          />
          <Text style={EmployersParticulars2.Txt178}>
            Occupation/Designation
          </Text>
          <TextInput
            style={styles.LongTextInput}
            onChangeText={onChangeEmployerOccupation}
            value={EmployerOccupation}
          />
          <Text style={EmployersParticulars2.Txt178}>
            NRIC / FIN / Passport No.
          </Text>
          <TextInput
            style={styles.ShortTextInput}
            onChangeText={onChangeEmployerNRIC}
            value={EmployerNRIC}
          />
          <Text style={EmployersParticulars2.Txt536}>Phone</Text>
          <TextInput
            style={styles.ShortTextInput}
            onChangeText={onChangeEmployerPhone}
            value={EmployerPhone}
          />
          <Text style={EmployersParticulars2.Txt536}>Email</Text>
          <TextInput
            style={styles.LongTextInput}
            onChangeText={onChangeEmployerEmail}
            value={EmployerEmail}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("EmployersConfirmation")}
        >
          <View style={EmployersParticulars2.Group226}>
            <Text style={EmployersParticulars2.Txt453}>Save and Continue</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={EmployersParticulars2.Group336}>
            <Text style={EmployersParticulars2.Txt453}>Save and Go Back</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={EmployersParticulars2.Txt635}>
        Please enter your details.
      </Text>
    </View>
  );
}

function EmployersConfirmationLoad() {
  const navigation = useNavigation();
  return (
    <View style={EmployersConfirmationStyle.ReviewSubmission}>
      <View style={EmployersConfirmationStyle.Group181}>
        <View style={EmployersConfirmationStyle.Component1}>
          <Text style={EmployersConfirmationStyle.Txt191}>8:55</Text>
          <Image
            style={EmployersConfirmationStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vp5fun99slb-I70%3A397%3B14%3A9?alt=media&token=6f3625f6-0628-4a3d-9de0-0e0b37eb1b19",
            }}
          />
          <Image
            style={EmployersConfirmationStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vp5fun99slb-I70%3A397%3B14%3A7?alt=media&token=c36aa585-8348-4651-b0e8-d9f6ad0c053a",
            }}
          />
          <Image
            style={EmployersConfirmationStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vp5fun99slb-I70%3A397%3B14%3A8?alt=media&token=6813b33f-d84c-4979-b8ed-1f96da7cbfb5",
            }}
          />
        </View>
        <View style={EmployersConfirmationStyle.Group218}>
          <Text style={EmployersConfirmationStyle.Txt583}>Review</Text>
          <Image
            style={EmployersConfirmationStyle.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vp5fun99slb-71%3A1035?alt=media&token=6a55076a-1473-49eb-ae49-62449fd7bd19",
            }}
          />
          <Image
            style={EmployersConfirmationStyle.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vp5fun99slb-71%3A1036?alt=media&token=11f88c0f-431d-474c-9eff-fd2c50975d30",
            }}
          />
          <Image
            style={EmployersConfirmationStyle.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vp5fun99slb-71%3A1037?alt=media&token=dfd7c3f5-8f9f-450b-9b5e-62f0327d75f2",
            }}
          />
          <Image
            style={EmployersConfirmationStyle.Vector4}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vp5fun99slb-71%3A1038?alt=media&token=4666d505-5cd8-4b5a-bfbd-7c07164536c0",
            }}
          />
        </View>
        <View style={EmployersConfirmationStyle.Group58}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(StackActions.popToTop())}
          >
            <Text style={EmployersConfirmationStyle.Txt938}>
              Delete application
            </Text>
          </TouchableOpacity>
        </View>
        <View style={EmployersConfirmationStyle.Group75}>
          <Text style={EmployersConfirmationStyle.Txt159}>
            Review your submission
          </Text>
          <View style={EmployersConfirmationStyle.Group3105}>
            <Text style={EmployersConfirmationStyle.Txt972}>Hours Upload</Text>
            <Text style={EmployersConfirmationStyle.Txt1039}>
              {EmployerTimesheetName}
            </Text>
            <Image
              style={EmployersConfirmationStyle.Vector5}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vp5fun99slb-71%3A1072?alt=media&token=16d12808-b31e-43af-9c4e-6487556f5468",
              }}
            />
          </View>
          <View style={EmployersConfirmationStyle.Group734}>
            <Text style={EmployersConfirmationStyle.Txt458}>CSN</Text>
            <Text style={EmployersConfirmationStyle.Txt967}>{EmployerCSN}</Text>
            <Image
              style={EmployersConfirmationStyle.Vector5}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vp5fun99slb-71%3A1073?alt=media&token=744341fa-3465-4a62-89ef-187ae852a2a9",
              }}
            />
          </View>
          <Text style={EmployersConfirmationStyle.Txt573}>
            Employee’s Company Particulars
          </Text>
          <View style={EmployersConfirmationStyle.Group276}>
            <Text style={EmployersConfirmationStyle.Txt113}>Name</Text>
            <Text style={EmployersConfirmationStyle.Txt417}>
              {EmployerEmployeeCompanyName}
            </Text>
          </View>
          <View style={EmployersConfirmationStyle.Group878}>
            <Text style={EmployersConfirmationStyle.Txt162}>Address</Text>
            <Text style={EmployersConfirmationStyle.Txt417}>
              {EmployerEmployeeCompanyAddress}
            </Text>
          </View>
          <View style={EmployersConfirmationStyle.Group404}>
            <Text style={EmployersConfirmationStyle.Txt1040}>Phone</Text>
            <Text style={EmployersConfirmationStyle.Txt417}>
              {EmployerEmployeeCompanyPhone}
            </Text>
          </View>
          <Text style={EmployersConfirmationStyle.Txt345}>
            Employee’s Particulars
          </Text>
          <View style={EmployersConfirmationStyle.Group900}>
            <Text style={EmployersConfirmationStyle.Txt314}>
              Occupation/ Designation
            </Text>
            <Text style={EmployersConfirmationStyle.Txt417}>
              {EmployerEmployeeOccupation}
            </Text>
          </View>
          <View style={EmployersConfirmationStyle.Group9110}>
            <Text style={EmployersConfirmationStyle.Txt568}>
              Date of Employment
            </Text>
            <Text style={EmployersConfirmationStyle.Txt417}>
              {EmployerEmployeeDOE}
            </Text>
          </View>
          <View style={EmployersConfirmationStyle.Group493}>
            <Text style={EmployersConfirmationStyle.Txt288}>
              Officer’s Particulars
            </Text>
            <Image
              style={EmployersConfirmationStyle.Vector5}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vp5fun99slb-71%3A1152?alt=media&token=477bd356-75bd-4488-8707-d719ebffb38b",
              }}
            />
          </View>
          <View style={EmployersConfirmationStyle.Group276}>
            <Text style={EmployersConfirmationStyle.Txt492}>Name</Text>
            <Text style={EmployersConfirmationStyle.Txt417}>
              {EmployerName}
            </Text>
          </View>
          <View style={EmployersConfirmationStyle.Group344}>
            <Text style={EmployersConfirmationStyle.Txt179}>
              Occupation/ Designation
            </Text>
            <Text style={EmployersConfirmationStyle.Txt417}>
              {EmployerOccupation}
            </Text>
          </View>
          <View style={EmployersConfirmationStyle.Group383}>
            <Text style={EmployersConfirmationStyle.Txt514}>
              NRIC/FIN/ Passport No.
            </Text>
            <Text style={EmployersConfirmationStyle.Txt417}>
              {EmployerNRIC}
            </Text>
          </View>
          <View style={EmployersConfirmationStyle.Group293}>
            <Text style={EmployersConfirmationStyle.Txt676}>Phone</Text>
            <Text style={EmployersConfirmationStyle.Txt417}>
              {EmployerPhone}
            </Text>
          </View>
          <View style={EmployersConfirmationStyle.Group3831}>
            <Text style={EmployersConfirmationStyle.Txt492}>Email</Text>
            <Text style={EmployersConfirmationStyle.Txt417}>
              {EmployerEmail}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("EmployersSubmission")}
        >
          <View style={EmployersConfirmationStyle.Group967}>
            <Text style={EmployersConfirmationStyle.Txt139}>Submit</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={EmployersConfirmationStyle.Group222}>
            <Text style={EmployersConfirmationStyle.Txt139}>
              Save and Go Back
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function EmployersSubmissionLoad() {
  const navigation = useNavigation();
  return (
    <View style={EmployersSubmissionStyle.MeFinal}>
      <View style={EmployersSubmissionStyle.Group778}>
        <View style={EmployersSubmissionStyle.Component2}>
          <Text style={EmployersSubmissionStyle.Txt523}>8:55</Text>
          <Image
            style={EmployersSubmissionStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zt4u4v7dhwq-I70%3A530%3B14%3A9?alt=media&token=95649e1e-38dc-41c1-8c8b-c22e5c55525e",
            }}
          />
          <Image
            style={EmployersSubmissionStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zt4u4v7dhwq-I70%3A530%3B14%3A7?alt=media&token=2bc59377-fbad-4bad-b69b-a97875573382",
            }}
          />
          <Image
            style={EmployersSubmissionStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zt4u4v7dhwq-I70%3A530%3B14%3A8?alt=media&token=a37aed25-f053-4d25-90ea-0a4d873021d5",
            }}
          />
        </View>
        <View style={EmployersSubmissionStyle.Group991}>
          <Text style={EmployersSubmissionStyle.Txt748}>
            Make Up Pay Submitted{" "}
          </Text>
        </View>
        <Image
          style={EmployersSubmissionStyle.Undraw_well_done_i2wr1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zt4u4v7dhwq-70%3A537?alt=media&token=9fbdebb6-8a3c-47c4-90a3-974183cf6661",
          }}
        />
        <Text style={EmployersSubmissionStyle.Txt386}>
          Congratulations on completing the Make Up Pay claims for employees.
          Please give up to 7 working days for submission to be processed.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <View style={EmployersSubmissionStyle.Group6910}>
            <Text style={EmployersSubmissionStyle.Txt3107}>
              Back to Profile
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//Export default stack
export default function FormStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileLoad}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ManageMakeUpPay"
        component={ManageMakeUpPayLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ClaimsOptions"
        component={ClaimsOptionsLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payslip"
        component={PaySlipLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmployeesParticulars"
        component={EmployeesParticularsLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmployeesConfirmation"
        component={EmployeesConfirmationLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmployeesSubmission"
        component={EmployeesSubmissionLoad}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ManageEmployees"
        component={ManageEmployeesLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Timesheet"
        component={TimesheetLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmployersParticulars1"
        component={EmployersParticulars1Load}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmployersParticulars2"
        component={EmployersParticulars2Load}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmployersConfirmation"
        component={EmployersConfirmationLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmployersSubmission"
        component={EmployersSubmissionLoad}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// Manage Make Up Pay Styles
const ManageMakeUpPayStyle = StyleSheet.create({
  ManageMakeUpPay: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Txt758: {
    position: "absolute",
    top: 60,
    left: 53,
    fontSize: 25,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    width: 321,
    height: 60,
  },
  Group321: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 14,
    width: 428,
    height: 820,
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt687: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Rectangle9: {
    backgroundColor: "rgba(29,129,20,1)",
    width: 428,
    height: 61,
    marginBottom: 66,
  },
  Undraw_printing_invoices_5R4r1: {
    width: 353,
    height: 218,
    marginBottom: 112,
  },
  multiple1: {
    main: "Txt080",
    seg1: "[object Object]",
    seg2: "[object Object]",
    seg3: "[object Object]",
    seg4: "[object Object]",
    paddingBottom: 20,
    textAlign: "center",
  },
  Group54: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 51,
    paddingRight: 50,
    marginBottom: 32,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt9109: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group55: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 61,
    paddingRight: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt9109: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});

// Claims Options Styles
const ClaimsOptionsStyle = StyleSheet.create({
  ClaimsOptions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 24,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Group035: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component4: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt945: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group823: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 25,
    paddingRight: 21,
    backgroundColor: "rgba(29,129,20,1)",
  },
  Txt533: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 55,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 17,
  },
  Vector4: {
    width: 23,
    height: 23,
    marginRight: 18,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 17,
  },
  Vector5: {
    width: 23,
    height: 23,
  },

  Group52: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 40,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt732: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Txt165: {
    fontSize: 23,
    fontWeight: "700",
    color: "rgba(0,0,0,0.85)",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 39,
  },
  Group784: {
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 119,
    paddingRight: 93,
    marginBottom: 39,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 350,
    height: 60,
  },
  Txt494: {
    fontSize: 24,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group932: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 8,
    paddingLeft: 29,
    paddingRight: 40,
    marginBottom: 39,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 2 },
  },
  Txt737: {
    fontSize: 32,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 58,
  },
  Txt494: {
    fontSize: 24,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group901: {
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 119,
    paddingRight: 73,
    marginBottom: 274,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 350,
    height: 60,
  },
  Txt494: {
    fontSize: 24,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group417: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 68,
    paddingRight: 67,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt428: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group792: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 75,
    paddingRight: 70,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt428: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});

// PaySlip Styles
const PaySlipStyle = StyleSheet.create({
  UploadPaySlip: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 26,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Group871: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 11,
  },
  Txt461: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group714: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 21,
    paddingRight: 21,
    backgroundColor: "rgba(29,129,20,1)",
  },
  Txt275: {
    fontSize: 26,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 51,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 17,
  },
  Vector4: {
    width: 23,
    height: 23,
    marginRight: 18,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 17,
  },
  Vector5: {
    width: 23,
    height: 23,
  },

  Group50: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 43,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt734: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Txt434: {
    fontSize: 20,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.85)",
    textAlign: "center",
    justifyContent: "center",
    width: 404,
    marginBottom: 27,
  },
  Group76: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 0,
    marginBottom: 28,
    borderRadius: 50,
    backgroundColor: "rgba(213,217,212,1)",
  },
  Txt1064: {
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(47,46,65,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  Group312: {
    paddingTop: 8,
    paddingBottom: 6,
    paddingLeft: 22,
    paddingRight: 25,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(213,217,212,1)",
    width: 106,
    height: 36,
  },
  Txt5410: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group57: {
    width: 373,
    height: 241,
    marginBottom: 213,
  },
  Group307: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 68,
    paddingRight: 67,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt444: {
    fontSize: 22,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group568: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 73,
    paddingRight: 72,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt444: {
    fontSize: 22,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});

// Particulars Styles
const EmployeesParticularsStyle = StyleSheet.create({
  EnterParticulars: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 31,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Group1095: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt766: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group768: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 35,
    paddingRight: 21,
    marginBottom: 1,
    backgroundColor: "rgba(29,129,20,1)",
  },
  Txt526: {
    fontSize: 26,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 85,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 18,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 18,
  },
  Vector4: {
    width: 23,
    height: 23,
    marginRight: 17,
  },
  Vector5: {
    width: 23,
    height: 23,
  },

  Group51: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 25,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt191: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Group64: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 52,
  },
  Txt098: {
    fontSize: 20,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 15,
  },
  Group63: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 25,
  },
  Group627: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 1,
  },
  Txt628: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 141,
  },
  Txt886: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group471: {
    display: "flex",
    flexDirection: "row",
  },
  Group175: {
    paddingTop: 5,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 41,
    marginRight: 60,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 159,
    height: 30,
  },
  Txt311: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group6910: {
    paddingTop: 5,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 41,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 159,
    height: 30,
  },
  Txt311: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Txt321: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 7,
  },
  Group557: {
    paddingTop: 5,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 41,
    marginBottom: 56,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 159,
    height: 30,
  },
  Txt311: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Txt321: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 7,
  },
  Rectangle123: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 14,
  },
  Txt829: {
    fontSize: 20,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 17,
  },
  Txt555: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 6,
  },
  Rectangle124: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 24,
  },
  Txt555: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 6,
  },
  Rectangle125: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 25,
  },
  Txt1004: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 2,
  },
  Rectangle126: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 159,
    height: 30,
    borderRadius: 10,
  },

  Group199: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 68,
    paddingRight: 67,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt618: {
    fontSize: 22,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group616: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 73,
    paddingRight: 72,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt618: {
    fontSize: 22,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});

// Submission Styles
const EmployeesSubmissionStyle = StyleSheet.create({
  MakeUpPayCompleted: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 98,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Group543: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 11,
  },
  Txt090: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group191: {
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 63,
    paddingRight: 60,
    marginBottom: 84,
    backgroundColor: "rgba(29,129,20,1)",
    width: 428,
    height: 61,
  },
  Txt755: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  Undraw_well_done_i2wr1: {
    width: 345,
    height: 311,
    marginBottom: 92,
  },
  Txt526: {
    fontSize: 20,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 372,
    height: 114,
    marginBottom: 69,
  },
  Group459: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 90,
    paddingRight: 92,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(213,217,212,1)",
    width: 340,
    height: 50,
  },
  Txt413: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
});

//Confirmation Styles
const EmployeesConfirmationStyles = StyleSheet.create({
  ReviewSubmission: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    paddingTop: 13,
    paddingBottom: 32,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Group005: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 11,
  },
  Txt1081: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group0110: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 29,
    paddingRight: 21,
    marginBottom: 70,
    backgroundColor: "rgba(29,129,20,1)",
  },
  Txt836: {
    fontSize: 26,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 138,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 18,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 18,
  },
  Vector4: {
    width: 23,
    height: 23,
    marginRight: 17,
  },
  Vector5: {
    width: 23,
    height: 23,
  },

  Group74: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 6,
    paddingRight: 0,
    marginBottom: 77,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
  },
  Txt798: {
    fontSize: 20,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 19,
  },
  Group65: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 23,
  },
  Txt928: {
    fontSize: 18,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 28,
  },
  Frame2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    marginRight: 49,
  },
  Txt197: {
    fontSize: 18,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Vector6: {
    width: 21,
    height: 18.66,
  },

  Group66: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 31,
  },
  Txt769: {
    fontSize: 18,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 22,
  },
  Txt223: {
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(47,46,65,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 29,
  },
  Vector6: {
    width: 21,
    height: 18.66,
  },

  Group67: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  Txt994: {
    fontSize: 18,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 214,
  },
  Vector6: {
    width: 21,
    height: 18.66,
  },

  Group68: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 21,
  },
  Txt531: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 72,
  },
  Txt407: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group68: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 21,
  },
  Txt393: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 81,
  },
  Txt407: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group70: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 40,
  },
  Txt448: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 54,
  },
  Txt407: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group71: {
    marginBottom: 21,
    width: 185,
    height: 22,
  },
  Txt958: {
    fontSize: 18,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group467: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 26,
  },
  Txt825: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 107,
  },
  Txt407: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group73: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  Txt083: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 86,
  },
  Txt407: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group877: {
    display: "flex",
    flexDirection: "row",
  },
  Txt6102: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 103,
  },
  Txt407: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group662: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 131,
    paddingRight: 129,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 340,
    height: 50,
  },
  Txt662: {
    fontSize: 22,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group355: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 73,
    paddingRight: 72,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 340,
    height: 50,
  },
  Txt662: {
    fontSize: 22,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group52: {
    position: "absolute",
    top: 105,
    left: 0,
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt772: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },
});

const profileStyles = StyleSheet.create({
  Profile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 64,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Group904: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt695: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group511: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 64,
    paddingRight: 64,
    marginBottom: 11,
    backgroundColor: "rgba(29,129,20,1)",
    width: 428,
    height: 61,
  },
  Txt442: {
    fontSize: 25,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  Group3310: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 14,
  },
  Group452: {
    display: "flex",
    flexDirection: "row",
  },
  Ellipse1: {
    width: 150,
    height: 150,
    marginRight: 20,
  },
  Group547: {
    display: "flex",
    flexDirection: "column",
  },
  Txt895: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    marginBottom: 12,
  },
  Txt895: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    marginBottom: 12,
  },
  Txt712: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    marginBottom: 14,
  },
  Txt219: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
  },

  Txt162: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(0,0,0,0.6)",
  },

  Group743: {
    marginBottom: 24,
    borderRadius: 25,
    backgroundColor: "rgba(209,236,199,1)",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 4 },
    width: 380,
    height: 236,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
  Group547: {
    display: "flex",
    flexDirection: "column",
  },
  Group1058: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 1,
  },
  CheckCircle: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group034: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 3,
  },
  CheckCircle: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group034: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 3,
  },
  Vector3: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group452: {
    display: "flex",
    flexDirection: "row",
  },
  Vector3: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group309: {
    paddingTop: 13,
    paddingBottom: 12,
    paddingLeft: 119,
    paddingRight: 117,
    marginBottom: 23,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group768: {
    paddingTop: 13,
    paddingBottom: 12,
    paddingLeft: 115,
    paddingRight: 114,
    marginBottom: 21,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt869: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    width: 149,
    height: 28,
  },

  Group541: {
    paddingTop: 14,
    paddingBottom: 11,
    paddingLeft: 72,
    paddingRight: 70,
    marginBottom: 26,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group699: {
    paddingTop: 14,
    paddingBottom: 11,
    paddingLeft: 84,
    paddingRight: 83,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
});

//EMPLOYERS STYLES
const ManageEmployeesStyle = StyleSheet.create({
  ManageEmployees: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 97,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(225,237,255,1)",
    width: 428,
    height: 926,
  },
  Group183: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component4: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt667: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group858: {
    marginBottom: 40,
    backgroundColor: "rgba(69,140,246,1)",
    width: 428,
    height: 61,
  },
  Txt814: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },
  Txt814: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  Group451: {
    paddingTop: 41,
    paddingBottom: 17,
    paddingLeft: 27,
    paddingRight: 27,
    marginBottom: 79,
    borderRadius: 169,
    backgroundColor: "rgba(255, 255, 255, 0.76)",
    width: 338,
    height: 254,
  },
  Undraw_fill_form_re_cwyf11: {
    width: 282,
    height: 194,
  },

  multiple1: {
    main: "Txt337",
    seg1: "[object Object]",
    seg2: "[object Object]",
    seg3: "[object Object]",
    seg4: "[object Object]",
  },
  Group57: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 51,
    paddingRight: 50,
    marginBottom: 32,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 340,
    height: 50,
  },
  Txt10102: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group56: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 61,
    paddingRight: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt10102: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});

//Timesheet Style
const TimesheetStyles = StyleSheet.create({
  UploadTimesheet: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 45,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(225,237,255,1)",
    width: 428,
    height: 926,
  },
  Group7106: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt4410: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group765: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 22,
    paddingRight: 17,
    marginBottom: 1,
    backgroundColor: "rgba(69,140,246,1)",
  },
  Txt223: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 73,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector4: {
    width: 23,
    height: 23,
  },

  Group53: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 39,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt296: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Txt1088: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 404,
    marginBottom: 27,
  },
  Group59: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 19,
    paddingRight: 0,
    marginBottom: 25,
    borderRadius: 50,
    backgroundColor: "rgba(213,217,212,1)",
  },
  Txt5910: {
    fontSize: 15,
    fontWeight: "400",
    color: "rgba(47,46,65,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  Group397: {
    paddingTop: 8,
    paddingBottom: 6,
    paddingLeft: 22,
    paddingRight: 25,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(213,217,212,1)",
    width: 106,
    height: 36,
  },
  Txt492: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group60: {
    width: 373,
    height: 241,
    marginBottom: 201,
  },
  Group1023: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 68,
    paddingRight: 67,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 340,
    height: 50,
  },
  Txt1061: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group233: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 73,
    paddingRight: 72,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt1061: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});

//EmployersParticulars1 Style
const EmployersParticulars1 = StyleSheet.create({
  EmployeeSDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 37,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(225,237,255,1)",
    width: 428,
    height: 926,
  },
  Group352: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component4: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt294: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group524: {
    marginBottom: 1,
    backgroundColor: "rgba(69,140,246,1)",
    width: 428,
    height: 61,
  },
  Txt384: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },
  Group311: {
    display: "flex",
    flexDirection: "row",
  },
  Txt502: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 46,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector4: {
    width: 23,
    height: 23,
  },

  Group55: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 25,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt209: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Txt729: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 404,
    marginBottom: 27,
  },
  Group62: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 32,
  },
  Txt394: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle145: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 30,
  },
  Txt466: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,0.8)",
    marginBottom: 7,
  },
  Txt894: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle134: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 17,
  },
  Txt894: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle135: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 18,
  },
  Txt396: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 1,
  },
  Rectangle132: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 159,
    height: 30,
    borderRadius: 10,
    marginBottom: 39,
  },
  Txt748: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,0.8)",
    marginBottom: 9,
  },
  Txt894: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle133: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 21,
  },
  Txt894: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Group323: {
    paddingTop: 5,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 41,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 159,
    height: 30,
  },
  Txt236: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group683: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 68,
    paddingRight: 67,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 340,
    height: 50,
  },
  Txt770: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group764: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 75,
    paddingRight: 70,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 340,
    height: 50,
  },
  Txt770: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});

//EmployersParticulars2 Style
const EmployersParticulars2 = StyleSheet.create({
  CertifyingOfficerSDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "rgba(225,237,255,1)",
    width: 428,
    height: 926,
  },
  Group963: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 14,
    none: "0px",
    width: 428,
    height: 874,
  },
  Component4: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt1098: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group7109: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 18,
    paddingBottom: 13,
    paddingLeft: 15,
    paddingRight: 18,
    marginBottom: 1,
    backgroundColor: "rgba(69,140,246,1)",
  },
  Txt374: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 54,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector4: {
    width: 23,
    height: 23,
  },

  Group55: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 79,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt886: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Group61: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 144,
  },
  Txt536: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle134: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 33,
  },
  Txt178: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 5,
  },
  Rectangle133: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 32,
  },
  Txt178: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 5,
  },
  Rectangle135: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 32,
  },
  Txt536: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle132: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 159,
    height: 30,
    borderRadius: 10,
    marginBottom: 34,
  },
  Txt536: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle145: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
  },

  Group226: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 68,
    paddingRight: 67,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 340,
    height: 50,
  },
  Txt453: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group336: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 75,
    paddingRight: 70,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 340,
    height: 50,
  },
  Txt453: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Txt635: {
    position: "absolute",
    top: 173,
    left: 46,
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 404,
    height: 24,
  },
});

//EmployersConfirmation Style
const EmployersConfirmationStyle = StyleSheet.create({
  ReviewSubmission: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 36,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(225,237,255,1)",
    width: 428,
    height: 926,
  },
  Group181: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt191: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group218: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 35,
    paddingRight: 18,
    backgroundColor: "rgba(69,140,246,1)",
  },
  Txt583: {
    fontSize: 26,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 140,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector4: {
    width: 23,
    height: 23,
  },

  Group58: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 28,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt938: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Group75: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 21,
  },
  Txt159: {
    fontSize: 20,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 10,
  },
  Group3105: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  Txt972: {
    fontSize: 18,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 22,
  },
  Txt1039: {
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(47,46,65,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 40,
  },
  Vector5: {
    width: 21,
    height: 18.66,
  },

  Group734: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 6,
  },
  Txt458: {
    fontSize: 18,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 104,
  },
  Txt967: {
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(47,46,65,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 151,
  },
  Vector5: {
    width: 21,
    height: 18.66,
  },

  Txt573: {
    fontSize: 18,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 7,
  },
  Group276: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
  },
  Txt113: {
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 83,
  },
  Txt417: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group878: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 12,
  },
  Txt162: {
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 65,
  },
  Txt417: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group404: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 16,
  },
  Txt1040: {
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 80,
  },
  Txt417: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Txt345: {
    fontSize: 18,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 11,
  },
  Group900: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 8,
  },
  Txt314: {
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 36,
  },
  Txt417: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group9110: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 16,
  },
  Txt568: {
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 35,
  },
  Txt417: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group493: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 7,
  },
  Txt288: {
    fontSize: 18,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 171,
  },
  Vector5: {
    width: 21,
    height: 18.66,
  },

  Group276: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
  },
  Txt492: {
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 84,
  },
  Txt417: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group344: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 9,
  },
  Txt179: {
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 33,
  },
  Txt417: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group383: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  Txt514: {
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 29,
  },
  Txt417: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group293: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 8,
  },
  Txt676: {
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 77,
  },
  Txt417: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group3831: {
    display: "flex",
    flexDirection: "row",
  },
  Txt492: {
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 84,
  },
  Txt417: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group967: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 131,
    paddingRight: 129,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt139: {
    fontSize: 22,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group222: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 75,
    paddingRight: 70,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt139: {
    fontSize: 22,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});

//EmployersSubmission Style
const EmployersSubmissionStyle = StyleSheet.create({
  MeFinal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 105,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(225,237,255,1)",
    width: 428,
    height: 926,
  },
  Group778: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 11,
  },
  Txt523: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group991: {
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 62,
    paddingRight: 61,
    marginBottom: 88,
    backgroundColor: "rgba(69,140,246,1)",
    width: 428,
    height: 61,
  },
  Txt748: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  Undraw_well_done_i2wr1: {
    width: 345,
    height: 311,
    marginBottom: 88,
  },
  Txt386: {
    fontSize: 20,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 372,
    height: 114,
    marginBottom: 62,
  },
  Group6910: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 90,
    paddingRight: 92,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 340,
    height: 50,
  },
  Txt3107: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
});

const styles = StyleSheet.create({
  LongTextInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },

  ShortTextInput: {
    height: 40,
    width: 150,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
});

import { Link } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import AppText from "../../components/ui/AppText";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Screen from "../../components/ui/Screen";
import { useAuth } from "../../context/AuthContext";
import { spacing } from "../../theme/tokens";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);

  async function onSubmit() {
    const e = {};
    if (!EMAIL_RE.test(email.trim())) e.email = "Enter a valid email.";
    if (!password) e.password = "Enter your password.";
    setErrors(e);
    if (Object.keys(e).length) return;

    setBusy(true);
    try {
      await login(email.trim(), password);
    } catch (err) {
      setErrors({ form: err.message });
      setBusy(false);
    }
  }

  return (
    <Screen scroll safeTop>
      <View style={{ marginTop: spacing.xl, marginBottom: spacing.lg }}>
        <AppText variant="display" color="primary">TripBook</AppText>
        <AppText color="muted">Plan, follow, and remember trips together.</AppText>
      </View>

      <Input label="Email" value={email} onChangeText={setEmail} error={errors.email}
        autoCapitalize="none" keyboardType="email-address" placeholder="you@example.com" />
      <Input label="Password" value={password} onChangeText={setPassword} error={errors.password}
        secureTextEntry placeholder="Your password" />

      {errors.form ? <AppText color="danger" style={{ marginBottom: spacing.md }}>{errors.form}</AppText> : null}

      <Button title="Log in" onPress={onSubmit} loading={busy} />

      <View style={{ marginTop: spacing.lg, alignItems: "center" }}>
        <Link href="/register"><AppText color="primary">Create an account</AppText></Link>
      </View>
    </Screen>
  );
}